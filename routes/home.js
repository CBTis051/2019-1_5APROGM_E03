const express = require('express');

const app = express();

/*
* Home del server -->  /
*/
app.get('/', (req, res) => {

    let objeto = {
        mensaje: "Bienvenidos al REST del server - 5APROGM Equipo 03"
    };

    res.send(objeto);

});

module.exports = app;