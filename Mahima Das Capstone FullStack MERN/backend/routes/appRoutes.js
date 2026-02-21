const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const upload = require('../middleware/uploadMiddleware');
const authMiddleware = require("../middleware/authMiddleware");



router.get("/", appController.getApps);
router.get("/owner", protect, appController.getOwnerApps);

router.post('/create', protect, upload.single('appImage'), appController.createApp);

router.get("/:id", appController.getAppById);

router.post("/download/:id", protect, appController.downloadApp);

router.put("/:id", protect, authorize('owner'), appController.updateApp);

router.delete("/:id", protect, authorize('owner'), appController.deleteApp);


module.exports = router;