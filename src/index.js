// console.log("Puvadon");
// console.log("Sangpirun");
// console.log("09447282050");
require('dotenv').config({ path: './config.env'});
const express = require('express')
const port = process.env.PORT  || 4005;
const app = express();

const bodyParser = require('body-parser')
const core = require('cors');

app.use(core());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const productRoute = require('./routes/productRoute');
app.use("/product", productRoute);


console.log();
console.log(process.env.PORT);

// app.get("/about", (req,res)=>{
//     res.send("Hello from about");
// })
// app.get("/index", (req,res)=>{
//     res.send("Hello from index");
// })
// app.get("/about", (req,res)=>{
//     res.send("Hello from about");
// })
// app.get("/product/:id", (req,res)=>{
// //params = paramiters
//     res.send("Hello from product at" + req.params.id);
// });




///////////////////////////////////////////////////////////////////////////////////
//ตัวอย่างการบวกเลข num1 กับ num2
// app.get("/fook/:num1/:num2", (req,res)=>{
//     let sum = (req.params.num1*1) + (req.params.num2*1);
//     //params = paramiters
//         res.send(`Sum : ${sum}`);
//     });
////////////////////////////////////////////////////////////////////////////////////



// app.post("/register", (req,res)=>{
//     console.log(req.body);
//     console.log(req.body.name);
//     console.log(req.body.email);
//     console.log(req.body.tel);
//     res.send("Hello from register")
// });



app.listen(port,()=>{
    console.log("App is running on " + port);
});

//router
app.get("/",(req,res)=>{
    res.send("Hello from index");
    console.log("get product by");
});











