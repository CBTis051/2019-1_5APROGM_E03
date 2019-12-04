const Sequelize = require('sequelize');
const sequelize = require('../models/db');

const Usuario = sequelize.define('usuario',{
        //Attributes
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Usuario: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        roll: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        // Options
        // Para que nos busque los campos createdAt, updatedAt
        timestamps: false,
        //  Para que cuando consultemos el modelo, no nos regrese la contraseña
        defaultScope: {
            attributes: { exclude: ['password'] },
        }
    }
);

module.exports = Usuario;