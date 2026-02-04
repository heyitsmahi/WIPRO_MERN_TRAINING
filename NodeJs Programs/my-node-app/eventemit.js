const eventemitter=require("events");
const emitter=new eventemitter();
emitter.on("OrderPlaced",() => {console.log("OrderPlaced event recieved. Processing order..");})
emitter.emit("OrderPlaced");