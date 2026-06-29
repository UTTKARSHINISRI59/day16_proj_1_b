const User=requrie ("../models/User");
const jwt=require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register=()=>{
    try{

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"unable to register",
            error:err.message
        })
    }
};

const login=()=>{}

const profile=()=>{};

const logout=()=>{};

module.exports={register,login,profile,logout};
