
import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
     username : {
        type : String,
        trim : true,
        required : true,
        unique : true 
    },
    email: {
      type: String,
      required: true,
      trim: true,
       unique: true,
    },
    password: {
      type: String,
      trim:true,
      required: true,
    },
    role : {
        type : String,
        default : "user"
    }
},{timestamps:true})

const User =  mongoose.models.User || mongoose.model("User", userSchema)
export default User;