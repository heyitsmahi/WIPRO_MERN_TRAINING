const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const { protect } = require("../middleware/authMiddleware");

//Owners to announce an update
router.post("/announce", protect, notificationController.announceUpdate);

// Users and Owners to fetch all notifications
router.get("/", protect, notificationController.getNotifications);

module.exports = router;