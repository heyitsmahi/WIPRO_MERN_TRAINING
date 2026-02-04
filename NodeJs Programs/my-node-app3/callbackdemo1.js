function processPayment(amount,callback){
    setTimeout(()=>{
        callback("Payment Successful");
    },1000);
}
console.log("example of call back");
processPayment(3000,(msg)=>{
    console.log(msg);
})

//using promise

function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("User Data"),2000})});
}
fetchUser().then(console.log);