const express = require('express');

//Rutas
const generalRouter = require('./general.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/general', generalRouter);
}

module.exports = routerApi;
