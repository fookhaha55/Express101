const express = require('express');
const app = express.Router();
const employeeControllres = require('../controllres/employeeControllres')
//การบ้าน
//ข้อ1
app.get("/",employeeControllres.getemployee );

//ข้อ2
app.get("/:id",employeeControllres.getemployeeById);


app.get("/tax/:sal",employeeControllres.getemployeeBySal);

app.get("/retire/:age",employeeControllres.getemployeeByAge);

app.post("/",employeeControllres.addemployeeByRecord);





module.exports = app;