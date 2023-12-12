const path = require('path');
const Router = require('koa-router');
const featchHanZi = require("./utils/featchHanZi");
const creatHanziScript = require("./utils/creatHanziScript");
const fetchGif = require("./utils/fetchGif");

const router = new Router();

router.get('/api/fetch/bishu', async (ctx, next) => {
    const res = await featchHanZi(ctx.query.wd || '')
    ctx.body = res;
    await next();
});

router.get('/api/update/hanziLibjs', async (ctx, next) => {
    creatHanziScript()
    await next();
});

router.get('/api/update/gifs', async (ctx, next) => {
    fetchGif()
    await next();
});

router.get('/', async (ctx, next) => {
    ctx.body = 'Hello, Koa!';
    await next();
});

module.exports = router
