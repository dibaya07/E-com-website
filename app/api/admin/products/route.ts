import connected from "@/config/dbConnect";
import { Products } from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET (){
    await connected()
    // console.log("helo")
    const res = await Products.find()
    // console.log(res)
    return NextResponse.json({messges : "success" , res})
}