"use strict"
var Router = require("koa-router");

module.exports = function(app) {

  var router = new Router();

  router.use(function *(next) {
    this.type = "json";
    yield next;
  });

  router.get("/", function *() {
    this.type = "html";
    yield indexController.index.apply(this);
  }); 
}