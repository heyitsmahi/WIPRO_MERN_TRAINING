const eventEmitter=require("events");

const emitter=new eventEmitter();

//listener
emitter.on("Order Placed",(data)=>{
    console.log(`Order ${data.orderId} processed`)

});
emitter.on("Order placed" ,(data) => console.log(`Email Sent to ${data.user}`));

emitter.on("Order placed" ,(data) => {
    
    console.log(`Inventory Updated for order ${data.orderId}`)});

//emitting event
//emitter.emit("Order Placed",101);

emitter.emit("Order Paced",{
    user:"Mahi",
    orderId:101

});


/*
Multiple listeners
emitter.on("order placed" ,() => console.log("Email Sent"));
emitter.on("order placed" ,() => console.log("Inventory Updated"));
emitter.on("order placed" ,() => console.log("Logs Created for Auditing"));
*/