const { generateToken } = require('../utils/generateToken');

const loginOwner = (username, password) => {
    if (username === 'admin' && password === 'owner123') {
        const token = generateToken(username, 'owner');
        return { message: "Login successful", token };
    }
    throw new Error('Invalid credentials');
};

module.exports = { loginOwner };