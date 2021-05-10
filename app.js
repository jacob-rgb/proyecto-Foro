'use strict'

const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// cargar archivos rutas

const api_routes = require('./routes/apiRoutes');
//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

//cors

app.use(cors(corsOptions));

// headers de la respuesta

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas

  //rutas parala api

  app.use('/api', api_routes);


 // rutas de las vistas
 
  app.get('*', function(req, res){
    res.status(200).sendFile(path.join(__dirname + '/public/index.html'));
  })

//exportar

module.exports = app;

