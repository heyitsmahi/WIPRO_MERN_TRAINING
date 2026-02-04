A company wants a lightweight backend service to:
Serve a simple ui (index.html)
 Track user actions
Log requests
Emit events for business actions
Process async operations clearly
 
index.html -  three buttons 1. Health Check 2) Login User 3) View Users
Log all api requests to a file
Emit events -- userLogin /login and dataFetched /users
Use Promises or Async/await  (Read users using promise, async /await
 
Server.js
Logger.js
Events.js
User.json
Router.js



expressrouting -- server.js
        const express = require('express');
        const app = express();
        app.use(express.json()); // built in middleware which is required of post & Put
        //custom middleware
        app.use((req,res,next)=>{
            console.log("Middleware :" , req.method, req.url)
            next(); //it is used to pass the control to route
        })
        //Routes
  //http://localhost:3000/user
        app.get("/user" , (req,res)=>{
            res.send("User fetched");
        })
        app.post("/userpost" , (req,res)=>{
            res.send("User data posted ");
        })
        app.put("/userput" , (req,res)=>{
            res.send("User updated");
        })
        app.delete("/userdelete" , (req,res)=>{
            res.send("User deleted");
        })
        app.listen(3000,()=>{
            console.log("Server running")
        })