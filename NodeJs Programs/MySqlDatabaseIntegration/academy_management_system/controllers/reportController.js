const { Course, Student, sequelize } = require("../models");

exports.studentsPerCourse = async (req, res) => {

  const report = await Course.findAll({
    attributes: [
      "title",
      [sequelize.fn("COUNT",
      sequelize.col("Students.id")), "totalStudents"]
    ],
    include: { model: Student, attributes: [] },
    group: ["Course.id"]
  });

  res.json(report);
};
