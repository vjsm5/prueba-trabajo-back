const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/error.handler');
var cors = require('cors');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

process.setMaxListeners(0);

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port,()=>{
  console.log('¡Ready! ' + port);
});