const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv')
const connectDB= require('./config/db')
const app=express();
dotenv.config();
connectDB();


app.get('/',(req,res)=>{
    res.send("Just Checking");
})
const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`)
});