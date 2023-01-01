const express =require('express')
const app=express()
app.get('/',function(req,res){
    res.send("HAPPY NEW YEAR");
})
app.listen(9095)
console.log("hello kavita")