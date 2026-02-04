const EventEmitter=require("events");
const emitter=new EventEmitter();


//It broadcasts only within the same event name, It doesnt braodcast acroess different event

//multiple listeners
emitter.on("userRegistered",(user)=>{
    console.log(`Welcome email sent to ${user}`)
});
emitter.on("paymentSuccess",(amount)=>{
    console.log(`Payment of Rs. ${amount} is done`)
});

// Emit event
emitter.emit("userRegistered", "Mahi");
emitter.emit("paymentSuccess", 1500);

/*
Multiple listeners
emitter.on("order placed" ,() => console.log("Email Sent"));
emitter.on("order placed" ,() => console.log("Inventory Updated"));
emitter.on("order placed" ,() => console.log("Logs Created for Auditing"));
*/