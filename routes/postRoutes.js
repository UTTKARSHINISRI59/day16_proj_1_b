const express=require("express");
const authMiddleware=require("../middleware/authMiddleware");
const {getAllPost, getSinglePost, getMyPost, createPost, updatePost}=require("../controllers/postContoller")


const router=express.Router();

router.get("/",getAllPost);
router.get("/single/:id",getSinglePost);
router.get("/my-post",authMiddleware,getMyPost);
router.post("/",authMiddleware,createPost);
router.post("/update/:id",authMiddleware,updatePost);



module.exports=router;
