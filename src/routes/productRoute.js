const express = require('express');
const app = express.Router();
const productControllers = require('../controllres/productControllres')
//ข้อ1
app.get("/",productControllers.getProduct );

//ข้อ2
app.get("/:id",productControllers.getProductById);

//ข้อ 3 
app.get("/name/:name",productControllers.getProductByName);

//ข้อ 4
app.get("/price/:price",productControllers.getProductByPrice);

//ข้อ5
app.post("/",productControllers.addProduct);

module.exports = app;