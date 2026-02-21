const notificationService = require("../services/notificationService");

exports.announceUpdate = async (req, res) => {
    try {
        const { appId, message } = req.body;
        const ownerId = req.user.id;

        const notification = await notificationService.createUpdateAnnouncement(appId, message, ownerId);
        
        res.status(201).json({ message: "Update announced successfully!", notification });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getNotifications = async (req, res) => {
    try {
        const notificationsDTO = await notificationService.getAllNotifications();
        res.status(200).json(notificationsDTO);
    } catch (error) {
        res.status(500).json({ error: "Server error fetching notifications" });
    }
};