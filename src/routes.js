const { Router } = require('express')

// const CurriculoController = require('./app/CurriculoController');

const app = Router()

    app.get("/api/curriculo")
    
    app.get("/*", (req, res, next) => {
    res.status(404).send("Nada aqui...")
});


module.exports = app;