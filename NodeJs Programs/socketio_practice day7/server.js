const express=require("express");
const http=require("http");
const {Server}=require("socket.io");
const auth = require("./middleware/auth");
const rateLimiter = require("./middleware/rateLimiter");
const app=express();
const server=http.createServer(app);
const io=new Server(server);

app.use(express.static("public"));

app.get("/api/messages",rateLimiter,(req,res)=>{
    res.json({
        message:"Rate limited Api is working"
    });
});

app.get("/api/admin", auth, (req,res)=>{
    res.json({
        message:"welcome admin"
    });
});

io.on("connection",(socket)=>{
    console.log("Client connected:",socket.id);

    socket.on("chat",(msg)=>{
        io.emit("chat",msg);
    });

    socket.on("disconnect",()=>{
        console.log("Disconnected");
    });
});

server.listen(5000,()=>{
    console.log("server is running at http://localhost:5000");
})

