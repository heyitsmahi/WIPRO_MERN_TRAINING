const { Instructor, Course } = require("../models");

exports.createInstructor = async (req, res) => {
  await Instructor.create(req.body);
  res.redirect("/dashboard");
};

exports.createCourse = async (req, res) => {
  await Course.create(req.body);
  res.redirect("/dashboard");
};
