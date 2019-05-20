const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/tk-hotgirl",(err)=>{
    if(err) console.log("err")
    else console.log("connect db")
})

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));



const userapirouter = require("./router/userApi");
app.use("/api/users",userapirouter)

app.use("/api/users",userapirouter)

app.use("/api/users/Id",userapirouter)

app.use("/api/users/Id",userapirouter)




app.listen(6699,function(err){
    if(err) console.log("err")
    else console.log("go :)")
})


