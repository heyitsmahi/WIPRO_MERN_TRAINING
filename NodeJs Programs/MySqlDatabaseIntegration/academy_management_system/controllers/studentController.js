const bcrypt = require("bcrypt");
const { Student, User, Course, sequelize } = require("../models");


exports.listStudents = async (req, res) => {
  const students = await Student.findAll();
  res.render("students", { students });
};


exports.createStudent = async (req, res) => {

  await sequelize.transaction(async (t) => {

    const hashed = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      username: req.body.username,
      password: hashed,
      role: "student"
    }, { transaction: t });

    await Student.create({
      name: req.body.name,
      email: req.body.email,
      UserId: user.id
    }, { transaction: t });

  });

  res.redirect("/dashboard");
};

exports.myCourses = async (req, res) => {

  const student = await Student.findOne({
    where: { UserId: req.session.user.id },
    include: Course
  });

  res.render("myCourses", {
    courses: student ? student.Courses : []
  });
};


