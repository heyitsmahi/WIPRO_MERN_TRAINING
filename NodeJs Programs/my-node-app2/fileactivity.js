//create user.txt where we have 5 users to add and append login timestamps and then read and print all users
const fs=require("fs");
const users=["Alice","Bob","Charlie","David","Eve"].join("\n");
fs.writeFileSync("users.txt",users);
//to append
const logintIme='\nLast Login: ${new Date().toLocaleString()}';
fs.appendFileSync("users.txt",logintIme);
console.log("Users file created.");

//read data
const data=fs.readFileSync("users.txt");
console.log("User Data:",data);