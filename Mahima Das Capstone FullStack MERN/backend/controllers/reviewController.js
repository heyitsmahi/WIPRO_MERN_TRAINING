const Review = require("../models/Review");
const Application = require("../models/App");

exports.addReview = async (req, res) => {
    try {
        const { appId, rating, comment } = req.body;
        const userId = req.user.id; // Comes from the jwt protect middleware

        //for validating  rating
        if (!rating || rating < 1 || rating > 5) {
            return res.status(400).json({ error: "Rating must be between 1 and 5." });
        }

        const app = await Application.findById(appId);
        if (!app) {
            return res.status(404).json({ error: "Application not found." });
        }

        const existingReview = await Review.findOne({ user: userId, app: appId });
        if (existingReview) {
            return res.status(400).json({ error: "You have already reviewed this app." });
        }

        const review = new Review({
            user: userId,
            app: appId,
            rating: Number(rating),
            comment
        });
        await review.save();

        app.reviews.push(review._id);

        const allReviews = await Review.find({ app: appId });
        const totalRating = allReviews.reduce((sum, rev) => sum + rev.rating, 0);
        app.ratings = (totalRating / allReviews.length).toFixed(1);
        
        await app.save();

        res.status(201).json({ message: "Review added successfully", review });

    } catch (error) {
        console.error("Error adding review:", error);
        res.status(500).json({ error: "Server error while adding review." });
    }
};