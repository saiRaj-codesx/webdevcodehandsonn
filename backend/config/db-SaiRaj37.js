import mongoose from "mongoose";

const connectDB = mongoose.connect("mongodb://0.0.0.0/men").then(()=>{
    console.log("Connected to DB");
    
})

export default connectDB