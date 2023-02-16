const express = require("express");
const {
  Addproduct,
  Getproducts,
  Delproduct,
  Editproduc,
  GetOneproduc,
  Editproduct,
  Getproduct,
  GetOneproduct,
} = require("../controlles/product");

const ProductRoute = express.Router();

ProductRoute.post("/addproduct", Addproduct);
ProductRoute.get("/getproduct", Getproduct);
ProductRoute.delete("/delproduct/:id", Delproduct);
ProductRoute.put("/editproduct/:id", Editproduct);
ProductRoute.get("/getOneproduct/:id", GetOneproduct);

module.exports = ProductRoute;