"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const status_1 = __importDefault(require("./status"));
const fresh_1 = __importDefault(require("fresh"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const url_1 = __importDefault(require("url"));
const qs_1 = __importDefault(require("qs"));
const debug = (0, debug_1.default)('koa:context');
const basename = path_1.default.basename;
const extname = path_1.default.extname;
const parse = url_1.default.parse;
const stringify = url_1.default.format;
const ctx = Context.prototype;
function Context(app, req, res) {
    this.app = app;
    this.req = req;
    this.res = res;
}
exports.default = Context;
Context.prototype = {
    get headers() {
        return this.req.headers;
    },
    get responseHeaders() {
        return this.res._headers || {};
    },
    get status() {
        return this.res.statusCode;
    },
    set status(val) {
        if ("string" == typeof val) {
            const n = status_1.default[val];
            if (!n)
                throw new Error(statusError(val));
            val = n;
        }
        this.res.statusCode = val;
    },
    get statusString() {
        return http_1.default.STATUS_CODES[this.status];
    },
    get url() {
        return this.req.url;
    },
    set url(val) {
        this.req.url = val;
    },
    get method() {
        return this.req.method;
    },
    set method(val) {
        this.req.method = val;
    },
    get path() {
        return parse(this.url).pathname;
    },
    set path(path) {
        const url = parse(this.url);
        url.pathname = path;
        this.url = stringify(url);
    },
    get query() {
        var str = this.querystring;
        if (!str)
            return {};
        return qs_1.default.parse(str);
    },
    set query(val) {
        this.querystring = qs_1.default.stringify(val);
    },
    get querystring() {
        return parse(this.url).query;
    },
    set querystring(str) {
        const url = parse(this.url);
        url.search = str;
        this.url = stringify(url);
    },
    get host() {
        const proxy = this.app.proxy;
        let host = proxy && this.get('X-Forwarded-Host');
        host = host || this.get("Host");
        if (!host)
            return;
        return host.split(/\s*,\s*/)[0].split(':')[0];
    },
    get fresh() {
        const method = this.method;
        const s = this.status;
        if ("GET" != method && "HEAD" != method)
            return false;
        if (s >= 200 && s <= 300 || 304 == s) {
            return (0, fresh_1.default)(this.header, this.responseHeader);
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
        return this.req.socket;
    },
    get length() {
        const len = this.get('Content-Length');
        if (null == len)
            return;
        return ~~len;
    },
    get responseLength() {
        const len = this.responseHeader['content-length'];
        const body = this.body;
        if (null == len) {
            if (!body)
                return;
            if ("string" == typeof body)
                return Buffer.byteLength(body);
            return body.length;
        }
        return ~~len;
    },
    get protocol() {
        const proxy = this.app.proxy;
        if (this.socket.encrypted)
            return "https";
        if (!proxy)
            return "http";
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
        if (!auth)
            return;
        const parts = auth.split(' ');
        if ('basic' != parts[0].toLowerCase())
            return;
        if (!parts[1])
            return;
        auth = parts[1];
        auth = new Buffer(auth, 'base64').toString().match(/^([^:]*):(.*)$/);
        if (!auth)
            return;
        return { username: auth[1], password: auth[2] };
    },
};
