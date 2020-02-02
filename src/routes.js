const { Router } = require('express')
const PageNotFound = require('./app/middlewares/PageNotFound');

// const CurriculoController = require('./app/CurriculoController');

const app = Router()

    app.get("/",(req, res) => {
        res.send("Bem Vindo ao meu Curriculo")
        // res.render('formulario');  
    });

    app.get("/api/curriculo",(req, res, next) => {
        res.send("Em construção...")
    });

    app.use(PageNotFound);
    


module.exports = app;