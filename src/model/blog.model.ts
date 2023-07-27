import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    title:{
        type:String, 
    },
    description:{
        type:String,
    },
    links: {
        type:String
    },
    files:{
        type: Array        
    }
});

export default model("Blog", blogSchema);
