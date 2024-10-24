import mongoose from "mongoose";
const connectDb=(handler)=>async (req,res)=>{
    if(mongoose.connections[0].readyState){ 
        return handler(req,res)
    }
    await mongoose.connect(process.env.mongoUri)
    return handler
}
export default connectDb