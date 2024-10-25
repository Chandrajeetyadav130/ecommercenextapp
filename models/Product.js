import { Schema, models, model } from "mongoose";
const ProductSchema=new Schema({
    title:{type:String,unique:false,required:true},
    slugs:{type:String, unique: true,required:true},
    desc:{type:String,required:true},
    img:{type:String,required:true},
    category:{type:String,required:true},
    size:{type:String,required:true},
    color:{type:String,required:true},
    price:{type:String,required:true},
    availability:{type:String,required:true}
},
{timestamps:true})

export default models.Product || model("Product", ProductSchema);