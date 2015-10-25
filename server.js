var koa = require("koa");
var serve = require("koa-static-folder");
var server = koa();

server.use(serve("./public"))
server.use(serve("./assets"))

server.use(function* () {
    this.body = 'Hello World';
});

server.listen(3000);
console.log('Koa server listening at port 3000');
