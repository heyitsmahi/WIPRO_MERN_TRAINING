//userstory2
const studentValidator = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "name and email are required"
        });
    }

    next(); // forward valid request
};

export default studentValidator;

// stops the request if invalid and return proper error message , else forwards valid requests