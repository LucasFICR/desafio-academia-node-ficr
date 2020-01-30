const express = require("express");
const app = express();
const CurriculoController = require("./app/controller/CurriculoController")(dataAPI);



app.get("/api/curriculo", function(req, res) {
  res.render("OK...");
});


app.listen(8077, function() {
  console.log("Servidor Rodando na url http://localhost:8077");
});

// usar axios para pegar os APIs github e facebook e aplicar no projeto;
// colocr uma duas function devolvendo as infomações do 
module.exports = (dataAPI) {
    dataHub() => {

      
      if (--dataHub OK--) {

        
      } else {
        console.log ('dataHub!' + err);
      }

        
  
    }
    dataFace() => {
        console.log ('dataFace OK!');

    }
  };