require('./config/config');

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const bodyParser = require('body-parser');

// parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Configuración global de rutas
app.use(require('./routes/index'));

/**
 *  Home del server --> /
 */
app.get('/', (req, res) => {

    let objeto = {
        mensaje: "Bienvenidos al REST del server - 5APROGM Equipo 03"
    };

    res.send(objeto);

});



app.listen(process.env.PORT, ()=> {
    console.log("Server running on port ", process.env.PORT);

});

