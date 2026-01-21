const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const users=require('../models/users')
exports.register=async(req,res)=>{
    try{
        const{name, email, password}=req.body;
        const existingUser=await users.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'User already exists'})
        }
        const hashedPassword= await bcrypt.hash(password,10);
        const user=await users.create({
            name,
            email,
            password:hashedPassword
        })
        res.status(201).json({message:"User created successfully"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong"})
    }
}
exports.login=async(req,res)=>{
    try{
        const {email, password}=req.body;
        const existingUser=await users.findOne({email});
        if(!existingUser){
            return res.status(404).json({message:"User not found"})
        }
        const isPasswordCorrect=await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const token =jwt.sign(
            {id:existingUser._id},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        )
        res.status(200).json({token, message:"Login Successful"});
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Something went wrong"});
    }
}