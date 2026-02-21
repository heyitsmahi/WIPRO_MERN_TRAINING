const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require('multer');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const connectDB = require("./db/connection");


const reviewRoutes = require('./routes/reviewRoutes');
dotenv.config();


const app = express(); //this creates http server

connectDB();

app.use(express.json()); //global middleware which converts incoming json to js objects
app.use(cors());

// this makes the uploads folder public so the browser can reach it
app.use('/uploads',express.static('uploads'));

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/apps", require("./routes/appRoutes"));

app.use('/api/reviews', require("./routes/reviewRoutes"));

app.use("/api/notifications", require("./routes/notificationRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));

module.exports = app;
