
const express = require("express");
const routes = express.Router();

const lokasiRoutes = require("./location.route");
const userRoutes = require("./user.route");

routes.use("/location", lokasiRoutes);
routes.use("/user", userRoutes);

module.exports = routes;