const { Router } = require('express')


// const CurriculoController = require('./app/CurriculoController');

const app = Router()

    app.get("/api/curriculo",(req, res, next) => {




        res.send("Em construção...")
    });
    app.get("/*", (req, res, next) => {
        res.status(404).send("Error 404")
    });


module.exports = app;