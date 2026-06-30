const express=require("express");
const router=express.Router();
const authMiddleware=require("../middleware/authMiddleware");

const {register, login, profile, logout}=require("../controllers/authController");
router.post("/register",register);
router.post("/login",login);
router.post("/profile",authMiddleware,profile);
router.post("/logout",logout);

module.exports=router;