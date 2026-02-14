const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING
});

const Instructor = sequelize.define("Instructor", {
  name: DataTypes.STRING,
  email: DataTypes.STRING
});

const Student = sequelize.define("Student", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
});

const Profile = sequelize.define("Profile", {
  bio: DataTypes.STRING
});

const Course = sequelize.define("Course", {
  title: DataTypes.STRING,
  price: DataTypes.FLOAT
});

const Enrollment = sequelize.define("Enrollment", {});

// Relations
Student.hasOne(Profile);
Profile.belongsTo(Student);

Instructor.hasMany(Course);
Course.belongsTo(Instructor);

Student.belongsTo(User);
User.hasOne(Student);


Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

module.exports = {
  sequelize,
  User,
  Instructor,
  Student,
  Profile,
  Course,
  Enrollment
};
