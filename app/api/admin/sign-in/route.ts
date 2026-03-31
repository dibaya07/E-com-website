import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import Admin_detail from "@/models/admin_details";

export async function POST ( req : NextRequest){
    const body = await req.json()
    const adminData = await Admin_detail.find()
    const adminSavedPassword = adminData[0].password
    
    if(await bcrypt.compare(body, adminSavedPassword )){
         return NextResponse.json({message : "Successfully Signed In", success: "true"})
    }   else{
        return NextResponse.json({message : "Wrong password", success: "false"})
    }
}
