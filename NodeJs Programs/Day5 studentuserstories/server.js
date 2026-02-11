//userstory2
// 
import express,{json,urlencoded} from "express";

import morgan from "morgan";

import studentRoutes from "./routes/studentRoutes.js";
import requestLogger from "./middleware/requestLogger.js";
const app = express();
//const PORT=6000;


//const morgan=require("morgan"); we imported this //1.userstory3


//built in middleware
app.use(json()); //2.JSON validation
app.use(urlencoded({ extended: true })); //post request from form data


app.use(requestLogger);//custom middleware


app.use(morgan("dev"));//userstory3 third party middleware

//routes
app.use("/students",studentRoutes);


//404 middleware
app.use((req,res)=>{
res.status(404).json({success:false,message:"Route not found"});
});



//userstory4 -- 3.error middleware which must be at the end. this is global error handler middleware
app.use((err,req,res,next)=>{
    console.error("Error",err.message);

    res.status(500).json({success:false, message:"some internal server error"});
});

app.listen(3000,()=>{
    console.log("Server is running and started");
})





/*

import express, { json, urlencoded } from "express";
import morgan from "morgan";
import requestLogger from "./middleware/requestLogger.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
// Built -in middleware
app.use(json());  // JSON 
app.use(urlencoded({ extended: true })); // Form data
//custom middleware
app.use(requestLogger);

//Third - party middlewares
app.use(morgan("dev"));

// routes
app.use("/students", studentRoutes);

// 404 Middleware
app.use((req,res)=> {
    res.status(404).json({success :false , message : "Route not found"});
});
//Global Error Handler middleware must be at the end
app.use((err,req,res,next)=> {
    console.error("Error" ,err.message);
    res.status(500).json({success :false , message : "Some internal server error"});
});

app.listen(3000, ()=>{
    console.log("Server is running and started");
}) */
