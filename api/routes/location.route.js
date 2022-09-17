const express = require("express"),
    router = express.Router();

const {
    getLocationById,
    getLocationByKotaId
} = require("../controllers/location.controller");

const { verifyUser } = require("../middleware/verify.middleware");

router.post("/id", verifyUser, getLocationById);
router.post("/kota_id", verifyUser, getLocationByKotaId);

module.exports = router;