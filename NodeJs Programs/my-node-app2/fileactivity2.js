const fs=require("fs");
const users=["Sakshi","Sun","ankit"].join("\n");
fs.writeFileSync("users2.txt",users);
const loginTime='\nLast Login:${new Date().toLocaleString()}';
fs.appendFileSync("users2.txt",loginTime);
console.log("Users file created");
const data=fs.readFileSync("users2.txt");
console.log("User Data:",data);