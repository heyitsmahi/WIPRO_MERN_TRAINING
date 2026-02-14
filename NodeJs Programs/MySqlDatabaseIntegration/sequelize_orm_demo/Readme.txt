------------------.env


DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=academy
PORT=3000

--------------connection.js
const {Sequelize} = require("sequelize");
require("dotenv").config(); // It will load the environment variables from the .env file into process.env


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    { host: process.env.DB_HOST, dialect: "mysql", logging: false }

)

module.exports = sequelize;

-----------------Course.js
const {DataTypes} = require("sequelize");
const sequelize =require("../db/connection.js");

const Course=sequelize.define("Course",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports=Course;


------------------------Instructor.js
const {DataTypes} = require("sequelize");
const sequelize =require("../db/connection.js");

const Instructor=sequelize.define("Instructor",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports=Instructor;


----------------index.js
const sequelize =require("../db/connection.js");
const Course = require("./Course.js");
const Instructor = require("./Instructor.js");

Instructor.hasMany(Course,{
    foreignKey:"instructorId",onDelete:"CASCADE"
})
Course.belongsTo(Instructor,{
    foreignKey:"instructorId"
})
module.exports={sequelize,Course,Instructor};


--------------------apiRoutes.js
const express=require("express");
const router = express.Router();
const {Instructor,Course} =require("../models");

router.post("/instructors", async(req,res)=>{
   const instructor= await Instructor.create({name:req.body.name});
   res.status(201).json(instructor);
});

router.post("/courses", async(req,res)=>{
   const course= await Course.create({title:req.body.title,instructorId:req.body.instructorId});
   res.status(201).json(course);
});

router.get("/instructors",async(req,res)=>{
    const instructor=await Instructor.findAll();
    res.status(200).json(instructor);
    
})
router.get("/courses",async(req,res)=>{
    const course=await Course.findAll();
    res.status(200).json(course);
    
})

router.get("/instructorsdetails",async(req,res)=>{
    const instructorDetails=await Instructor.findAll({include:Course});
    res.status(200).json(instructorDetails);
    
})

module.exports=router;

-------------app.js
const express =require("express");

require("dotenv").config(); // Load environment variables from .env file

const apiRoutes = require("./routes/apiRoutes");
const {sequelize} = require("./models") // Import user routes

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use("/api", apiRoutes); // Use the user routes for any requests to "/api/user" endpoint

sequelize.sync({alter:true})
.then(()=>{
    console.log("DataBase is Synchronize")
})

app.use((error,req,res,next) => {
    console.error(error);
    res.status(500).json({error: "Internal Server Error"});
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});




http://localhost:400/api/enroll post

{
    :courseId":1,
    "studentId":1
}









------------------.env


DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=academy
PORT=3000

--------------connection.js
const {Sequelize} = require("sequelize");
require("dotenv").config(); // It will load the environment variables from the .env file into process.env


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    { host: process.env.DB_HOST, dialect: "mysql", logging: false }

)

module.exports = sequelize;

-----------------Course.js
const {DataTypes} = require("sequelize");
const sequelize =require("../db/connection.js");

const Course=sequelize.define("Course",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports=Course;


------------------------Instructor.js
const {DataTypes} = require("sequelize");
const sequelize =require("../db/connection.js");

const Instructor=sequelize.define("Instructor",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports=Instructor;


----------------index.js
const sequelize =require("../db/connection.js");
const Course = require("./Course.js");
const Instructor = require("./Instructor.js");

Instructor.hasMany(Course,{
    foreignKey:"instructorId",onDelete:"CASCADE"
})
Course.belongsTo(Instructor,{
    foreignKey:"instructorId"
})
module.exports={sequelize,Course,Instructor};


--------------------apiRoutes.js
const express=require("express");
const router = express.Router();
const {Instructor,Course} =require("../models");

router.post("/instructors", async(req,res)=>{
   const instructor= await Instructor.create({name:req.body.name});
   res.status(201).json(instructor);
});

router.post("/courses", async(req,res)=>{
   const course= await Course.create({title:req.body.title,instructorId:req.body.instructorId});
   res.status(201).json(course);
});

router.get("/instructors",async(req,res)=>{
    const instructor=await Instructor.findAll();
    res.status(200).json(instructor);
    
})
router.get("/courses",async(req,res)=>{
    const course=await Course.findAll();
    res.status(200).json(course);
    
})

router.get("/instructorsdetails",async(req,res)=>{
    const instructorDetails=await Instructor.findAll({include:Course});
    res.status(200).json(instructorDetails);
    
})

module.exports=router;

-------------app.js
const express =require("express");

require("dotenv").config(); // Load environment variables from .env file

const apiRoutes = require("./routes/apiRoutes");
const {sequelize} = require("./models") // Import user routes

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use("/api", apiRoutes); // Use the user routes for any requests to "/api/user" endpoint

sequelize.sync({alter:true})
.then(()=>{
    console.log("DataBase is Synchronize")
})

app.use((error,req,res,next) => {
    console.error(error);
    res.status(500).json({error: "Internal Server Error"});
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

-----Studentss.js

const {DataTypes} = require("sequelize");
const sequelize =require("../db/connection.js");

const Studentss=sequelize.define("Studentss",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports=Studentss;

----Enrollment.js
const {DataTypes} = require("sequelize");
const sequelize =require("../db/connection.js");

const Enrollment=sequelize.define("Enrollment",{
    enrolledAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
})
module.exports=Enrollment;

----updated index.js
const sequelize =require("../db/connection.js");
const Course = require("./Course.js");
const Instructor = require("./Instructor.js");
const Enrollment = require("./Enrollment.js");
const Studentss = require("./Studentss.js");
Instructor.hasMany(Course)
Course.belongsTo(Instructor)
Studentss.belongsToMany(Course,{through:Enrollment})
Course.belongsToMany(Studentss,{through:Enrollment})
module.exports={sequelize,Course,Instructor,Studentss,Enrollment};

------updated apiRoutes.js

const express=require("express");
const router = express.Router();
const {Instructor,Course,Studentss,Enrollment} =require("../models");

router.post("/instructors", async(req,res)=>{
   const instructor= await Instructor.create({name:req.body.name});
   res.status(201).json(instructor);
});

router.post("/courses", async(req,res)=>{
   const course= await Course.create(req.body);
   res.status(201).json(course);
});

router.post("/students", async(req,res)=>{
   const student= await Studentss.create(req.body);
   res.status(201).json(student);
});

router.post("/enroll",async(req,res) => {
    const {studentId,courseId} = req.body
    const student= await Studentss.findByPk(studentId);
    const course = await Course.findByPk(courseId);
    if (!student || !course) {throw new Error("Invalid course Id")}
    await student.addCourse(course)
    res.json({message:"Enrollment Done"})
    });
    

router.get("/instructors",async(req,res)=>{
    const instructor=await Instructor.findAll();
    res.status(200).json(instructor);
    
})
router.get("/courses",async(req,res)=>{
    const course=await Course.findAll({include:Studentss});
    res.status(200).json(course);
    
})

router.get("/instructorsdetails",async(req,res)=>{
    const instructorDetails=await Instructor.findAll({include:Course});
    res.status(200).json(instructorDetails);
    
})

module.exports=router;

















