const EventEmitter=require("events");
const emitter=new EventEmitter();
emitter.on("userLogin",()=>{
    console.log("User Logged in");
});

emitter.on("dataFetched",()=>{
    console.log("User data fetched");
})

emitter.emit("userLogin");
emitter.emit("dataFetched");