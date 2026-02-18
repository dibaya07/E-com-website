import mongoose from "mongoose";

export default async function connected() {
    try{
        const res = await mongoose.connect('mongodb://localhost:27017/zentro')
        console.log('database connected..')    
    }catch(error){
        console.log('have error in connecting database',error)
    }
}