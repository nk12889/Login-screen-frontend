const { DataTypes } = require("sequelize");

const database = require("../config/database");

const User = database.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primarykey: true
    },

    name: DataTypes.STRING,

    email: {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
    },

    password: DataTypes.INTEGER,
     
});


module.exports = User;