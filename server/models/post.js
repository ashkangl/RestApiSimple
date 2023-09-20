import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:String,
    added_date:{type:Date,default:Date.now},
    content:String
})

export default mongoose.model("Post",postSchema);