const { validateToken, generateError } = require("../helper");

exports.verifyUser = async (req, res, next) => {
    try {
        if (!req.headers['authorization']) throw generateError("Unauthorized", "unauthorized access");

        const bearerToken = req.headers["authorization"].split(" ");

        if (bearerToken[0] !== "Bearer") throw generateError("Unauthorized", "wrong token code");

        const token = bearerToken[1];

        req.data = await validateToken(token);

        next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};