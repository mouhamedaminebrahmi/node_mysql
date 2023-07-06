module.exports = (app) => {
  const sequelizeObject = require("./menu.controllers");

  var router = require("express").Router();

  // Create a new dbShema
  router.post("/", sequelizeObject.create);

  // Retrieve all dbShema
  router.get("/", sequelizeObject.findAll);

  app.use("/menus", router);
};
