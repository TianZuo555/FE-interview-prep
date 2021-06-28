const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = { username: 'tian', password: 'pass', fn: 'fn' };
});

app.listen(3000);
