const pool = require("../db/connection");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.registerEmployee = async (req, res, next) => {
    try {
        const { name, email, department } = req.body;
        if (!name || !email || !department) {
            return res.status(400).json({
                message: "Name, Email and Department are required"
            });
        }
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format"
            });
        }


        const [existing] = await pool.query(
            "SELECT * FROM employee WHERE email = ?",
            [email]
        );

        if (existing.length > 0) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }
        await pool.query(
            "INSERT INTO employee (name, email, department) VALUES (?, ?, ?)",
            [name, email, department]
        );

        res.status(201).json({
            message: "Employee registered successfully"
        });

    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        next(error);
    }
};
