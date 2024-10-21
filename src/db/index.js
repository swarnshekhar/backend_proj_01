import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n mongoDB connected !! DB HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongpdb connection error",error);
        process.exit(1)
    }
}

export default connectDB


// process.exit(0)=>means process is completed without an error
// Non-zero values (like 1): These typically indicate that the process terminated due to an error or abnormal condition. In this case, 1 signifies a general error.