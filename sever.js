const express = require('express');
const app = express();
const fs = require('fs');


app.listen(6699 ,function(error){
    if(error) console.log(error)
    else console.log("sever start success !!")
});

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html")
})
app.get('/:Webnumber', function(req, res){
    const Webnumber = req.params.Webnumber;
    
    try{
        const data = JSON.parse(fs.readFileSync(__dirname + "/data/" +Webnumber + ".json", { encoding: "utf-8" }))
        let output = `<ul>`;
        data.map(function(name, key){
                output += `<li>${name}</li>`;
            });
        output += `</ul>`;
        
    } catch (error){
        res.send("404 Not Found!");
    }
    
    
})