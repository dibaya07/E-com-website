import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connected() {
    try{
        if(!process.env.CONNECTION_STRING){
            throw new Error('connection is not defined')
        }
        const res = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('database connected..')    
    }catch(error){
        console.log('have error in connecting database',error)
    }
}