const jwt = require("jsonwebtoken");

exports.generateToken = async (id) =>
    jwt.sign(id, process.env.JWT_KEY, { expiresIn: '1h' });

exports.validateToken = async (token) =>
    jwt.verify(token, process.env.JWT_KEY);

exports.generateError = (name, message) => {
    const error = new Error(message);
    error.name = name;
    return error;
};