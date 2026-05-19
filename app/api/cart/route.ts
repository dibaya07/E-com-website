// import connected from "@/config/dbConnect";
import { Products } from "@/models/product";
import { NextRequest } from "next/server";

export async function POST  (req : NextRequest){
    try{
        // await connected()
        const data = await req.json()
        // console.log(data)
        const res = await Products.find({_id:{$in : data.allCarts}})
        // console.log(res)
        return Response.json({message : "get call", allCarts : res})
    }catch(error){
        console.log("cart error this is ",error)
        return Response.json({message : "got error"})
    }
}