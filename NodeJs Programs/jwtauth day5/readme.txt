npm install express mongoose jsonwebtoken bcryptjs

auth.js

const jwt = require("jsonwebtoken");

module.exports = function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Token missing");
  }
  console.log(authHeader);
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "jwt_secret_key");
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};



authorize.js

module.exports = function authorize(requiredRole) {
  return (req, res, next) => {
    if (req.user.role !== requiredRole) {
      return res.status(403).send("Access denied");
    }
    next();
  };
};



User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String
});

module.exports = mongoose.model("User", userSchema);



server.js

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("./models/User");
const auth = require("./middleware/auth");
const authorize = require("./middleware/authorize");

const app = express();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/jwt_rbac")
  .then(() => console.log("DB Connected"));


app.get("/createuser", async (req, res) => {
  await User.deleteMany({});
  await User.create({
    username: "admin",
    password: await bcrypt.hash("123", 10),
    role: "admin"
  });
  await User.create({
    username: "user",
    password: await bcrypt.hash("123", 10),
    role: "user"
  });
  res.send("Users created");
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(401).send("Invalid login");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send("Invalid login");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "jwt_secret_key",
    { expiresIn: "1h" }
  );

  res.json({ token });
});




app.get("/guestuser", auth, (req, res) => {
  res.json({
    message: "Profile accessed",
    user: req.user
  });
});


app.get("/admin", auth, authorize("admin"), (req, res) => {
  res.send("Welcome Admin");
});


app.get("/user", auth, authorize("user"), (req, res) => {
  res.send("Welcome User");
});

app.listen(3000, () => console.log("Server running on 3000"));



