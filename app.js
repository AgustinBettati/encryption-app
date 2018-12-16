var express = require('express');
var app = express();

//set up de template engine
app.set('view engine', 'ejs');

//Cualquier busqueda de un archivo estatico(fotos css etc) busca en la carpeta assets
app.use(express.static('./public'));

//Se conecta a la base de datos
var mongoose = require('mongoose');
mongoose.connect('***********', { server: { reconnectTries: Number.MAX_VALUE } });

var indexController = require('./controllers/index.js');
var encryptController = require('./controllers/encryptController');
var decryptController = require('./controllers/decryptController');

//execute controllers
indexController(app);
encryptController(app);
decryptController(app);

app.listen(3000);

console.log("El servidor esta activo en 3000");
