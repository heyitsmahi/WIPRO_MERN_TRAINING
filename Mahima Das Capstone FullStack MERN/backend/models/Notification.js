const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    appId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Application", 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
    isGlobal: {
        type: Boolean,
        default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);