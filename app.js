const express = require("express"),
    bodyParser = require("body-parser");

const routes = require("./api/routes");
const app = express();

app.use(bodyParser.json());
app.use(routes);

module.exports = app;