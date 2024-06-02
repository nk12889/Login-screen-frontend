const Sequelize = require("sequelize");

const database = new Sequelize("expense", "root", "705043", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = database;