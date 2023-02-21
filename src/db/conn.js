const mongoose=require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/dynamic_project").then(()=>{
    console.log("connection sucessful")}).catch((err)=>{console.log(err)})


// mongoose.exports   