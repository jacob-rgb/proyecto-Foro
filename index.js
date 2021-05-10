'use strict'
require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT;


// Opciones de mongoose

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

// conexion con la DB y Levantar el servidor

mongoose.connect(process.env.MONGO_CNN, {useNewUrlParser: true,  useUnifiedTopology: true})
        .then(() => {
            console.log('Conexion a db establecida con exito...');

            // creación del servidor
            app.listen(port, () => {
                console.log('Servidor corriendo correctamente en la url localhost: 3800');
            })
        })
        .catch((err) => {
            console.log(err);
        })
