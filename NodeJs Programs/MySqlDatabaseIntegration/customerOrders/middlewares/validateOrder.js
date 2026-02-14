const { body, validationResult } = require("express-validator");

exports.validateOrder = [
    body("custname")
        .notEmpty().withMessage("Customer name is required")
        .isLength({ min: 3 }).withMessage("Customer name must be at least 3 characters"),

    body("items")
        .isArray({ min: 1 }).withMessage("Items must be a non-empty array"),

    body("items.*.product_id")
        .notEmpty().withMessage("Product ID is required")
        .isInt({ min: 1 }).withMessage("Product ID must be a valid integer"),

    body("items.*.quantity")
        .notEmpty().withMessage("Quantity is required")
        .isInt({ min: 1 }).withMessage("Quantity must be greater than 0"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        next();
    }
];
