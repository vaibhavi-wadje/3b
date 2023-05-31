const dbConnect=require('./mongodb')
const express=require('express');
const { response } = require('express');
const app=express();

//getAPI
app.get('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.find().toArray();
    res.send(result);
})







app.listen(5000);