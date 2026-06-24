const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const products = [
{
name:"Laptop",
price:50000
},
{
name:"Phone",
price:20000
}
];

app.get("/api/products",(req,res)=>{
res.json(products);
});

app.listen(5000,()=>{
console.log("Server Running");
});