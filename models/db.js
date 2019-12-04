const Sequelize = require('sequelize');

// Conexión a la BD con seuqelize
const sequelize = new Sequelize('proyecto','root', 'Maguan123.', {
    host: 'al17130.systems',
    dialect: 'mysql',
    port: 3306
});

sequelize
    .authenticate()
    .then(()=> {
        console.log('Connection has been established succesfuly.');
    })
    .catch(err => {
            console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;

    