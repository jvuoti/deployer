var koa = require("koa");
var router = require("koa-router")();
var serve = require("koa-static-folder");

var server = koa();

server.use(serve("./server/public"))

router.get('/', function* (next) {
    this.body = 'Hello World';
});

router.get('/deployment', function* (next) {
    this.body = [
        { name: 'foo', lastDeploymentTime: new Date('2015-09-12T12:01:22Z'), lastDeployedVersion: "1.2.0" },
        { name: 'bar', lastDeploymentTime: new Date('2015-09-12T12:31:22Z'), lastDeployedVersion: "1.1.0" },
        { name: 'baz', lastDeploymentTime: new Date('2015-09-12T11:01:22Z'), lastDeployedVersion: "1.19.0" }];
});

function* cors(next) {
    yield* next;
    this.set('Access-Control-Allow-Origin', `http://localhost:8080`);
}
server
    .use(cors)
    .use(router.routes())
    .use(router.allowedMethods());

server.listen(3000);
console.log('Koa server listening at port 3000');
