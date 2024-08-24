const mongoose = require('mongoose');
const mongoURI = ("mongodb://localhost:27017/website")
.then(()=>{
    console.log("mongo db connect");
})
.catch(()=>{
    console.log("failed");
})

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection