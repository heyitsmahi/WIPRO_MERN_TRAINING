const appService = require("../services/appService");
const Application = require("../models/App"); 
const Notification = require("../models/Notification");

exports.getApps = async (req, res) => {
    try {
        const { search, genre, minRating } = req.query;
        const apps = await appService.getAllApps(search, genre, minRating);
        res.status(200).json(apps);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch apps" });
    }
};

exports.getOwnerApps = async (req, res) => {
    try {
        const apps = await appService.getOwnerApps(req.user.id);
        res.status(200).json(apps);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch owner apps" });
    }
};

exports.createApp = async (req, res) => {
    try {
        const appData = {
            ...req.body,
            ownerId: req.user.id,
            image: req.file ? req.file.path : ""
        };

        const newApp = await appService.createApp(appData);
        res.status(201).json(newApp);
    } catch (error) {
        console.error("Create App Error:", error);
        res.status(500).json({ error: "Failed to create app" });
    }
};

exports.updateApp = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedApp = await Application.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedApp) return res.status(404).json({ error: "App not found" });
        
        res.status(200).json({ message: "Updated successfully", updatedApp });
    } catch (error) {
        res.status(500).json({ error: "Server error during update" });
    }
};

exports.deleteApp = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedApp = await Application.findByIdAndDelete(id);
        
        if (!deletedApp) return res.status(404).json({ error: "App not found" });
        
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error during deletion" });
    }
};

exports.getAppById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || id === "undefined") {
            return res.status(400).json({ error: "Waiting for valid ID..." });
        }
        const app = await Application.findById(id).populate({
            path: 'reviews',
            populate: {
                path: 'user',
                select: 'name'
            }
        });
        
        if (!app) {
            return res.status(404).json({ error: "Application not found" });
        }
        
        res.status(200).json(app);
    } catch (error) {
        console.error("Error fetching single app:", error);
        res.status(500).json({ error: "Server error fetching app details" });
    }
};


exports.downloadApp = async (req, res) => {
    try {
        const { id } = req.params;
        const app = await Application.findByIdAndUpdate(
            id,
            { $inc: { downloadCount: 1 } },
            { new: true }
        );

        if (!app) return res.status(404).json({ error: "App not found" });

        const newNotification = new Notification({
            ownerId: app.ownerId,
            appId: app._id,
            appName: app.name,
            message: `New download for ${app.name}! Total: ${app.downloadCount}`,
            date: new Date()
        });
        
        await newNotification.save();
        res.status(200).json({ message: "Download successful", downloadCount: app.downloadCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to process download" });
    }
};