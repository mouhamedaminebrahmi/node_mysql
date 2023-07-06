var express = require("express");
var router = express.Router();
var path = require("path");

require("../src/api/Menu/menu.routes")(router);

module.exports = router;
