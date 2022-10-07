const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

// public routes
app.use("/", routes.auth);

module.exports = app;
