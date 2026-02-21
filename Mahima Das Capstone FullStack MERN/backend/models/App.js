const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema(  //one owner to many applications
    {
        name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    releaseDate: {
        type: Date,
        default: Date.now
    },

    version: {
        type: String,
        default:"1.0"
    },

    ratings: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },

    genre: {
        type: String,
        default:"General"
    },

    visibility: {
        type: Boolean,
        default: true
    },
    image: { 
        type: String 
    },
    category: { 
        type: String, required: true

    },

    downloadCount: {
        type: Number, default: 0
    },

    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isVisible: { 
        type: Boolean, default: true 
    },

    features: [{ type: String }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
},
{ timestamps: true }
);

module.exports = mongoose.model("Application", AppSchema,"applications");