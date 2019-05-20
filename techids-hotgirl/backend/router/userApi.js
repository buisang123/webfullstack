const express = require("express")
const userapirouter = express.Router();

const userModel = require("../usermodel")

// get list user(lay du lieu)
userapirouter.get("/",function(req,res){
    userModel.find({},(err,users)=>{
        if(err) res.json({success: false,err});
        else res.json({success: true , data:users})
    })
})
//create user
userapirouter.post("/",(req,res) => {
    userModel.create(req.body,(err,userscreate) => {
        if(err) res.json({success: false,err});
        else res.json({success: true, data:userscreate})
    })
})

userapirouter.put("/:id",(req,res) => {
    const id = req.params.id
    userModel.findById(id,(err,usersfound) => {
        if(err) res.json({success: false,err});
        else if(!usersfound) res.json({success: false,err:"not found"})
        else{
            for(let key in req.body){
                let value = req.body[key];
                if(value !== null){
                    usersfound[key] = value;
                }
            }

            usersfound.save((err,userupdate) => {
                if(err) res.json({success: false, err})
                else res.json({success: true , data: userupdate})
            })
        }
    })
})

userapirouter.delete("/:id",(req,res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({},(err) => {
        if(err) res.json({success: false,err});
        else res.json({success: true,})
    })
})

module.exports = userapirouter;