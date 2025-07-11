const express = require('express');
const { logErrors, errorHandler } = require('./middlewares/error.handler');
var cors = require('cors');
const app = express();
const port = 3000;

/*
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto " + port);
});

app.get('/productos', () => {
    console.log("LISTADO DE PRODUCTOS");
});
*/

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


app.use(cors());

app.use(express.json());

process.setMaxListeners(0);

//routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port,()=>{
  console.log('¡Ready! ' + port);
});

app.get('/productos', () => {
    console.log("LISTADO DE PRODUCTOS");
});