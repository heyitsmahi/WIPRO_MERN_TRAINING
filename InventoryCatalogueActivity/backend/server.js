const express =require("express");

const app = express();
app.set("view engine", "ejs");


const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Phone", price: 25000 }
];

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/admin/products", (req, res) => {
  res.render("products", { products });
});

app.get("/error", (req, res) => {
  throw new Error("Something broke");
});
app.use((err, req, res, next) => {
  res.status(500).render("error", { message: err.message });
});

app.listen(3001, () => {
  console.log("Admin running on 3001");
});
