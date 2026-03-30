import connected from "@/config/dbConnect"
import { Products } from "@/models/product"
import { NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest) {
    try {
        await connected()
        const page = Number(request.nextUrl.searchParams.get("page"));
        const allProducts = await Products.find().skip(page * 6).limit(6);
        const productCount = await Products.countDocuments();
        return NextResponse.json({ allProducts, productCount })
        
    } catch (error) {
        console.log('product route error', error)
    }
}
