const express = require("express");
const controller = require("../controllers/orderController");
const { validateOrder } = require("../middlewares/validateOrder");

const router = express.Router();

router.post("/place", validateOrder, controller.placeOrder);

module.exports = router;

