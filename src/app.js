const express = require("express");
const router = require("./routes")

class App {
  constructor () {
    this.express = express()
    this.routes()
  }
  routes () {
    this.express.use(router)
  }
};
 //factory no lugar do middleware

module.exports = new App().express

