const mongoose=require("mongoose");

const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,// foreign key bn rha h
        ref:"User"
    }
},{timestamps:true});

module.ecports= mongoose.model("Post",postSchema);
