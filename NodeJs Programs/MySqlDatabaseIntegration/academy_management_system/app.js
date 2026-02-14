const express = require("express");
const session = require("express-session");
const { sequelize } = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(session({
  secret: "academy_secret",
  resave: false,
  saveUninitialized: false
}));

sequelize.sync({ alter: true })
.then(()=>console.log("Database synced"));

app.use(require("./routes/apiRoutes"));

app.listen(4000,()=>console.log("Server running on port 4000"));
