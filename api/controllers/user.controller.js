const { generateToken, generateError } = require("../helper");

exports.userLogin = async (req, res) => {
    try {
        const { username } = req.body;
        if (username !== "root") throw generateError("Not Found", "user not found");

        const token = await generateToken({ username });

        res.status(200).json({ message: "login success", data: { token } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};