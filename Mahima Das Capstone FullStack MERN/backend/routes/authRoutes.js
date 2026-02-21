const express = require("express");
const router = express.Router();

const auth = require("../controllers/authcontroller");
const User = require("../models/User");


router.post("/register", auth.register);

router.post("/login", auth.login);
router.get("/users", async (req,res)=>{
  const users = await User.find();
  res.json(users);
});


module.exports = router;
