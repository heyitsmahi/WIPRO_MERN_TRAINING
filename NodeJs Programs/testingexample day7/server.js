require("dotenv").config();

const PORT=process.env.PORT ||3000;

const express=require("express");
const userRoutes=require("./routes/userRoutes");

const app=express();

app.use(express.json());

app.use("/users",userRoutes);

//error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"Internal Server Error"
    });
});

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});
module.exports=app;