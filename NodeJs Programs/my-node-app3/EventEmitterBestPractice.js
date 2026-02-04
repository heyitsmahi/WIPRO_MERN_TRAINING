const EventEmitter = require("events");
const emitter = new EventEmitter();

//listener
emitter.on("Order Placed" , (data)=>{
    console.log("Listener1 started");
    console.log(`Order ${data.orderId} processed`)
});
emitter.on("Order Placed" , (data)=>{
     console.log("Listener2 started");
    console.log(`Email sent for order ${data.user}`)
});
emitter.on("Order Placed" , (data)=>{
     console.log("Listener3 started");
    console.log(`Inventory updated for order ${data.orderId}`)
});

//Asynchronous call
emitter.on("Order Placed" , async (data)=>{
    await orderPlaced();
    console.log("Listener1 started");
    console.log(`Order ${data.orderId} processed`)
});
emitter.on("Order Placed" , async (data)=>{
    await sendEmail();
     console.log("Listener2 started");
    console.log(`Email sent for order ${data.user}`)
});
emitter.on("Order Placed" , async (data)=>{
    await updateInventory();
     console.log("Listener3 started");
    console.log(`Inventory updated for order ${data.orderId}`)
});
// Emit event
// emitter.emit("Order Placed" , 101);
console.log("Before Emit");
emitter.emit("Order Placed" ,{
    user:"Niti Dwivedi",
    orderId: 101
});
console.log("After Emit");
