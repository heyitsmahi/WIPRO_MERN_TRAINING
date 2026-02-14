const { Enrollment, Student, Course, sequelize } =
  require("../models");

exports.showEnrollPage = async (req, res) => {

  const students = await Student.findAll();
  const courses = await Course.findAll();

  res.render("enroll", {students,courses});
};


exports.enrollStudent = async (req, res) => {

  console.log("ENROLL BODY:", req.body);

  await sequelize.transaction(async (t) => {

    await Enrollment.create({
      StudentId: req.body.studentId,
      CourseId: req.body.courseId
    }, { transaction: t });

  });

  res.redirect("/dashboard");
};

