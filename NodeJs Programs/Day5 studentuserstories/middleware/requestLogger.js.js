//userstory1
function requestLogger(req, res, next) {
    const time = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    console.log(`${time} - ${method} - ${url}`);
    next(); 
}
export default requestLogger;


/**const express = require("express");
const requestLogger = require("./middleware/logger");
const app = express();
const PORT = 4000;

app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/products", (req, res) => {
  res.json({ message: "Product List" });
});
app.listen(4000, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Products API: http://localhost:${PORT}/products`);
}); */

/*const express = require("express");
const app = express();
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();
    const method = req.method;
    const url = req.originalUrl;
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
});
app.get("/", (req, res) => {
    res.send("Home Page Loaded");
});
app.get("/users", (req, res) => {
    res.send("Users List");
});
app.post("/login", (req, res) => {
    res.send("Login Successful");
});
app.put("/update", (req, res) => {
    res.send("Data Updated");
});
app.delete("/delete", (req, res) => {
    res.send("Data Deleted");
});
app.listen(3000, () => {
    console.log(`Server running on port 3000`); // http://localhost:3000
});*/

/*const express = require("express");
const app = express();
//adding middleware in express App
app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`${time} | ${req.method} | ${req.url}`);
    next();
});
app.get("/", (req, res) => {
    res.send("Home Page");
});
app.get("/about", (req, res) => {
    res.send("About Page");
});
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
}); */