const express = require("express")
const collection = require("./login")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('../../backend/model/user')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/website");
app.get("/Signup",cors(),(req,res)=>{

})

app.post('/Signup', async(req,res) => {
    const{name,email,password}=req.body
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }
    }
    catch(e){
            res.json("not exist")
    }
})


app.post('/Login', async(req,res) => {
    const{name,email,password}=req.body
    const data={
        email:email,
        password:password
    }
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
            await collection.insertMany([data])
        }
    }
    catch(e){
            res.json("not exist")
    }
})

app.listen(3000,()=>{
    connsle.log("port connected");
})