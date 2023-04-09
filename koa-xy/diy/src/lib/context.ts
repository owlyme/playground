import Debug from "debug";
import Negotiator from "negotiator"
import statuses from "./status"
import fresh from "fresh"
import http from "http"
import path from "path"
import mine from "mine"
import url from "url"
import qs from "qs"


const debug = Debug('koa:context')
const basename = path.basename
const extname = path.extname
const parse = url.parse
const stringify = url.format
const ctx = Context.prototype

export default function Context(app, req, res) {
    this.app = app
    this.req = req
    this.res = res
}

Context.prototype = {
    get headers() {
        return this.req.headers
    },
    get responseHeaders() {
        return this.res._headers || {}
    },
    get status() {
        return this.res.statusCode
    },
    set status(val) {
        if ("string" == typeof val) {
            const n = statuses[val]
            if (!n) throw new Error(statusError(val))
            val = n
        }
        this.res.statusCode = val
    },
    get statusString() {
        return http.STATUS_CODES[this.status];
    },
    get url() {
        return this.req.url
    },
    set url(val) {
        this.req.url = val
    },
    get method() {
        return this.req.method
    },
    set method(val) {
        this.req.method = val
    },
    get path() {
        return parse(this.url).pathname;
    },
    set path(path) {
        const url = parse(this.url)
        url.pathname = path
        this.url = stringify(url)
    },
    get query() {
        var str = this.querystring
        if (!str) return {}
        return qs.parse(str)
    },
    set query(val) {
        this.querystring = qs.stringify(val)
    },
    get querystring() {
        return parse(this.url).query
    },
    set querystring(str) {
        const url = parse(this.url)
        url.search = str
        this.url = stringify(url)
    },
    get host() {
        const proxy = this.app.proxy;
        let host = proxy && this.get('X-Forwarded-Host')
        host = host || this.get("Host");
        if (!host) return;
        return host.split(/\s*,\s*/)[0].split(':')[0];
    },
    get fresh() {
        const method = this.method
        const s = this.status
        if ("GET" != method && "HEAD" != method) return false;
        if (s >= 200 && s <= 300 || 304 == s) {
            return fresh(this.header, this.responseHeader);
        }

        return false;
    },
    get stale() {
        return !this.fresh;
    },
    get idempotent() {
        return 'GET' == this.method
            || 'HEAD' == this.method;
    },
    get socket() {
        return this.req.socket
    },
    get length() {
        const len = this.get('Content-Length')
        if (null == len) return;
        return ~~len
    },
    get responseLength() {
        const len = this.responseHeader['content-length'];
        const body = this.body
        if (null == len) {
            if (!body) return;
            if ("string" == typeof body) return Buffer.byteLength(body);
            return body.length;
        }

        return ~~len
    },

    get protocol() {
        const proxy = this.app.proxy;
        if (this.socket.encrypted) return "https";
        if (!proxy) return "http";
        const proto = this.get('X-Forwarded-Proto') || "http";
        return proto.split(/\s*,\s*/)[0];
    },

    get secure() {
        return 'https' == this.protocol;
    },
    get ip() {
        return this.ips[0] || this.connection.remoteAddress;
    },
    get ips() {
        const proxy = this.app.proxy;
        const val = this.get('X-Forwarded-For');
        return proxy && val
            ? val.split(/ *, */)
            : [];
    },
    get auth() {
        let auth = this.get('Authorization');
        if (!auth) return;
        const parts = auth.split(' ');
        if ('basic' != parts[0].toLowerCase()) return;
        if (!parts[1]) return;
        auth = parts[1];
        auth = new Buffer(auth, 'base64').toString().match(/^([^:]*):(.*)$/);
        if (!auth) return;
        return { username: auth[1], password: auth[2] };
    },
    get subdomains() {
        var offset = this.app.subdomainOffset;
        return (this.host || '')
            .split('.')
            .reverse()
            .slice(offset);
    },
    accepts(types: string) {
        if (!Array.isArray(types)) types = [].slice.call(arguments);
        const normalized = types.map(extToMime);
        const n = new Negotiator(this.req);
        const accepts = n.preferredMediaTypes(normalized);
        const first = accepts[0];
        if (!first) return false;
        return types[normalized.indexOf(first)];
    },
    get acceptedEncodings() {
        var n = new Negotiator(this.req);
        return n.preferredEncodings();
    },
    get acceptedCharsets() {
        var n = new Negotiator(this.req);
        return n.preferredCharsets();
    },
    get acceptedLanguages() {
        var n = new Negotiator(this.req);
        return n.preferredLanguages();
    },

    get accepted() {
        var n = new Negotiator(this.req);
        return n.preferredMediaTypes();
    },
    get headerSent() {
        return this.res.headersSent;
    },
    error(err: any) {
        if (this.app.outputErrors) console.error(err.stack);
        // TODO: change name
        // TODO: header sent check
        this.status = 500;
        this.res.end('Internal Server Error');
    },
    vary(field: string) {
        this.append('Vary', field);
    },
    is(type: string) {
        var ct = this.type;
        if (!ct) return false;
        ct = ct.split(';')[0];

        // extension given
        if (!~type.indexOf('/')) type = mime.lookup(type);

        // type or subtype match
        if (~type.indexOf('*')) {
            type = type.split('/');
            ct = ct.split('/');
            if ('*' == type[0] && type[1] == ct[1]) return true;
            if ('*' == type[1] && type[0] == ct[0]) return true;
            return false;
        }

        // exact match
        return type == ct;
    },
    redirect(url: string, alt: string) {
        if ('back' == url) url = this.get('Referrer') || alt || '/';
        this.set('Location', url);
        this.status = 302;
        if (this.accepts('html')) {
            url = escape(url);
            this.type = 'text/html; charset=utf-8';
            this.body = 'Redirecting to <a href="' + url + '">' + url + '</a>.';
            return;
        }

        this.body = 'Redirecting to ' + url + '.';

    },
    attachment(filename) {
        if (filename) this.type = extname(filename);
    }

}


function extToMime(type) {
    if (~type.indexOf('/')) return type;
    return mime.lookup(type);
}
