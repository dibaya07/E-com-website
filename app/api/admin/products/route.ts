import connected from "@/config/dbConnect";
import { Products } from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req : NextRequest){
    try{
        await connected()
        const page = Number(req.nextUrl.searchParams.get("page"))
        const res = await Products.find().skip(page * 6).limit(6)
        const productCount = await Products.countDocuments()
        return NextResponse.json({messges : "success" , res, productCount})
    }catch(error){
        return NextResponse.json({message : "Got error"})
    }
}