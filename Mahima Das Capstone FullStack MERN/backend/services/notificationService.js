const Notification = require("../models/Notification");
const Application = require("../models/App");

const formatNotification = (notification) => {
    return {
        id: notification._id,
        appName: notification.appId ? notification.appId.name : "Deleted App",
        appIcon: notification.appId ? notification.appId.image : null,
        message: notification.message,
        date: notification.createdAt
    };
};

exports.createUpdateAnnouncement = async (appId, message, ownerId) => {
    //Verifies the app exists and belongs to the owner
    const app = await Application.findById(appId);
    if (!app) throw new Error("Application not found");
    
    if (app.ownerId.toString() !== ownerId.toString()) {
        throw new Error("You do not have permission to announce updates for this app");
    }

    const newNotification = new Notification({
        appId,
        message,
        isGlobal: true
    });
    await newNotification.save();

    return newNotification;
};

exports.getAllNotifications = async () => {
    // Populate the appId so we can get the App's name and image for the servise
    const notifications = await Notification.find()
        .populate("appId", "name image") 
        .sort({ createdAt: -1 }); // newest notification first

    return notifications.map(formatNotification);
};