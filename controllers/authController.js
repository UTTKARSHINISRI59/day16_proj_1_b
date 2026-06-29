const User=requrie ("../models/User");
const jwt=require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register=async()=>{
    try{
        const {name,email,password}=req.body;
        const oldUser=await User.findOne({email});
        if(oldUser){
            return res.status(400).json({
                success:false,
                message:"user already exist"
            });
        }
        const hashPassword = await bcrypt.hash(password,10);
        const user= await User.create({name,email,password:hashPassword});
        res.status(201)

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"unable to register",
            error:err.message
        })
    }
};

const login=()=>{
    try{
        const {name,email,password}=requestAnimationFrame.body;
        const oldUser= 
    }
}

const profile=()=>{};

const logout=()=>{};

module.exports={register,login,profile,logout};
