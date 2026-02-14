const express=require("express");
const router = express.Router();
const {Instructor,Course,Student,Enrollment} =require("../models");

router.post("/instructors", async(req,res)=>{
   const instructor= await Instructor.create({name:req.body.name});
   res.status(201).json(instructor);
});

router.post("/courses", async(req,res)=>{
   const course= await Course.create(req.body);
   res.status(201).json(course);
});

router.post("/students", async(req,res)=>{
   const student= await Student.create(req.body);
   res.status(201).json(student);
});

router.post("/enroll",async(req,res) => {
    const t = sequelize.transaction();
    try{
    const {studentId,courseId} = req.body
    const student= await Student.findByPk(studentId,{transaction:t});  //wherever there is await..it means there is a trancation going on
    const course = await Course.findByPk(courseId,{transaction:t});
    if (!student || !course) {throw new Error("Invalid course Id")}
    await student.addCourse(course,{transaction:t})
    await t.commit();
    res.json({message:"Enrollment Done"}) 
    }
    catch(err){
        await t.rollback();
        res.json({message:err.message})
    }
    });
    

router.get("/instructors",async(req,res)=>{
    const instructor=await Instructor.findAll();
    res.status(200).json(instructor);
    
})
router.get("/courses",async(req,res)=>{
    const course=await Course.findAll({include:Student});
    res.status(200).json(course);
    
})

router.get("/instructorsdetails",async(req,res)=>{
    const instructorDetails=await Instructor.findAll({include:Course});
    res.status(200).json(instructorDetails);
    
})

module.exports=router;
