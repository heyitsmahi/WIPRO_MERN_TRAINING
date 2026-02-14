/*const sequelize= require("../db/connection.js");
const Course=require("./Course.js");
const Instructor=require("./Instructor.js");
const Enrollment=require("./Enrollment.js");
const Student=require("./Student.js");

Instructor.hasMany(Course);
    //,{
    //foreignKey:"InstructorId",  //defined foreign key instructorid
   // onDelete:"CASCADE"} 

Course.belongsTo(Instructor)
/*,{   //OneInstructor:manYCourses
    foreignKey:"InstructorId"
}); //create a foreign key in course table

Student.belongsToMany(Course,{through:Enrollment}) //student belongs to many course and instructors

Course.belongsToMany(Student,{through:Enrollment})

module.exports={sequelize,Course,Instructor,Student,Enrollment}; 
*/
const sequelize =require("../db/connection.js");
const Course = require("./Course.js");
const Instructor = require("./Instructor.js");
const Enrollment = require("./Enrollment.js");
const Student = require("./Student.js");
Instructor.hasMany(Course)
Course.belongsTo(Instructor)
Student.belongsToMany(Course,{through:Enrollment})
Course.belongsToMany(Student,{through:Enrollment})
module.exports={sequelize,Course,Instructor,Student,Enrollment};