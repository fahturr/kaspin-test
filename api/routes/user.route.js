const express = require("express"),
    router = express.Router();

const { userLogin } = require("../controllers/user.controller");

router.post("/login", userLogin);

module.exports = router;