const express = require('express');
const app = express();

 app.get("/", (req, res, next) => {
    res.send("Tudo bem por aqui...");

});

  app.listen(9669, () => {
    console.log("Servidor Rodando na url http://localhost:9669");
  });