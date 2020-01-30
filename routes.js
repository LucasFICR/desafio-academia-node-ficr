//routes

app.get("/api/curriculo", function(req, res) {
    res.render("OK...");
  });
  
  app.get("/*", (req, res, next) => {
    res.status(404).send("Erro 404, nada por aqui");
  });