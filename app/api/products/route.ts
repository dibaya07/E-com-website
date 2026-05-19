import connected from "@/config/dbConnect"
import { Products } from "@/models/product"
import { NextRequest, NextResponse } from "next/server"
// import { sampleProducts } from "@/data/data"


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


// export async function POST() {
//     try {
//         await connected() 
//         await Products.deleteMany();
//         const allProducts = sampleProducts;
//         const updatedProducts = allProducts.map(item => ({
//             ...item,
//             owner: "Admin",
//             role: "user"
//         })
//         )
//         await Products.insertMany(updatedProducts);
//         return NextResponse.json({ message: "work done" });
//     }
//     catch (error) {
//         console.log(error)
//         return NextResponse.json({ error })
//     }
// }