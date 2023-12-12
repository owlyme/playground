const Koa = require('koa');
const cors = require('koa2-cors')
const router = require('./router');

const app = new Koa();

app.use(cors({
    origin: ["*"],
    // maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    // credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});