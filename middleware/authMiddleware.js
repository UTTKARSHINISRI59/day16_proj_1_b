const jwt = require ("jsonwebtoken");
const User= require ("../models/User");

const authMiddleware= async(req,res,next)=>{
    try{
        const authHeader=req.headers.authorization;

        if(!authHeader || authHeader.startWith("Bearer")){
            return res.status(401).json({
                succes:false,
                message : "token not found"
            });
        }

        //nowwork with token
        //let name="bearer jnhrfbuygbjdhsbjyheu"

        let token=authHeader.split(" ")[1];
        const decoded = jwt.verify(token.process.env.SECRET_KEY);

        const user=await User.findById({id:decoded.id});
        //without password...
        if (!user){
            return res.status(401).json({
                success:false,
                message:"user not found"
            });
        }
        console.log("middleware wala user",user);
        req.user=user;
        next();


    }
    catch(err){
        console.log("some error in authentiucation",err);
        return res.json({
            success:false,
            message:"invalid token"
        })
    }
};

