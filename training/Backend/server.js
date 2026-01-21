const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express()
const authRoutes=require('./routes/authRoutes')
const taskRoutes=require('../routes/taskroutes');
app.use('/api/auth',authRoutes);
app.use('/api/task',taskRoutes);
app.use(express.json());
dotenv.config()
app.use(express.json());
mongoose
    .connect(
        process.env.MONGO_URI
    )
    .then(()=>{console.log("MongoDB connected")})
    .catch((err)=>{console.log(err)})
app.get('/api',(req,res)=>{
    res.send('"HI" from express')
})
app.post('/api',(req,res)=>{
    const temp=req.body
    res.send(temp)
})
app.listen(4000,()=>{
    console.log("Running on 4000")
})

