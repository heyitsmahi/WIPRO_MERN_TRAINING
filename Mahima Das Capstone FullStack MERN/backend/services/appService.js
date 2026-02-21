const Application = require("../models/App");

const formatApp= (app) => {
    return {
        _id: app._id,
        id: app._id,
        name: app.name,
        description: app.description,
        category: app.category,
        genre: app.genre,
        version: app.version,
        image: app.image,
        ratings: app.ratings || 0,
        isVisible: app.isVisible,
        downloadCount: app.downloadCount || 0,
        reviews: app.reviews || [],
        releaseDate: app.releaseDate
    };
};

exports.getAllApps = async (search, genre, minRating) => {
    let query = { isVisible: true };

    if (search) {
        query.name = { $regex: search, $options: "i" };
    }
    if (genre) {
        query.genre = genre;
    }
    if (minRating) {
        query.ratings = { $gte: Number(minRating) };
    }

    const apps = await Application.find(query);
    return apps.map(formatApp);
};

exports.getOwnerApps = async (ownerId) => {
    const apps = await Application.find({ ownerId });
    return apps.map(formatApp);
};

exports.createApp = async (appData) => {
    const newApp = new Application(appData);
    await newApp.save();
    return formatApp(newApp);
};