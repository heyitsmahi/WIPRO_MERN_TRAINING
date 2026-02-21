const jwt = require('jsonwebtoken');
const SECRET_KEY = "your_super_secret_key"; // Move to .env later

const generateToken = (username, role) => {
    return jwt.sign({ username, role }, SECRET_KEY, { expiresIn: '30d' });
};

module.exports = { generateToken, SECRET_KEY };