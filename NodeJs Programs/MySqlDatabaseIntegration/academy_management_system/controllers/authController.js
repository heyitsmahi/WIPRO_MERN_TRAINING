const bcrypt = require("bcrypt");
const { User } = require("../models");

exports.showLogin = (req, res) => {
  res.render("login");
};

exports.login = async (req, res) => {

  console.log("FORM DATA:", req.body);

  const user = await User.findOne({
    where: { username: req.body.username }
  });

  console.log("FOUND USER:", user);

  if (!user) {
    return res.send("User not found");
  }

  const valid = await bcrypt.compare(req.body.password, user.password);

  if (!valid) {
    return res.send("Invalid password");
  }

  req.session.user = user;
  res.redirect("/dashboard");
};

exports.dashboard = (req, res) => {
  res.render("dashboard", {
    user: req.session.user
  });
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};
