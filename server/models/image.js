import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    image:String
})

export default mongoose.model("ImageModel",imageSchema);