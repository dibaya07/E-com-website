import { error } from "console";
import mongoose from "mongoose";

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