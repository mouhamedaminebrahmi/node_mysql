"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//db.books = require("../src/api/Book/book.model")(sequelize, Sequelize);
db.menus = require("../src/api/Menu/menu.model")(sequelize, Sequelize);

module.exports = db;
