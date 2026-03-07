import connected from "@/config/dbConnect"
import { Products } from "@/models/product"
import { NextRequest, NextResponse } from "next/server"

let productCount : number = 0;

export async function GET(request: NextRequest) {
    try {
        await connected()
        const page = Number(request.nextUrl.searchParams.get("page"));
        const allProducts = await Products.find().skip(page * 6).limit(6);
        productCount = await Products.countDocuments();
        return NextResponse.json({ allProducts, productCount })
        
    } catch (error) {
        console.log('product route error', error)
    }
}
