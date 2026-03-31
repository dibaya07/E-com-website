import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema({
    username : {
        type : String,
        trim : true,
    },
    email : {
        type : String,
        trim : true
    },
    password : {
        type : String,
        trim : true
    },
    role : {
        type : String,
        default : "admin"
    }
},{timestamps : true})

const Admin_detail = mongoose.models.Admin_detail || mongoose.model("Admin_detail", adminUserSchema)
export default Admin_detail;