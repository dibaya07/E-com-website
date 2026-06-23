import connected from "@/config/dbConnect"
import { Products } from "@/models/product"
import { NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest) {
    try {
        await connected()
        const page = Number(request.nextUrl.searchParams.get("page"));
        const allProducts = await Products.find({status : "Published"}).sort({_id : -1}).skip(page * 6).limit(6);
        const productCount = await Products.countDocuments();

        // const itemswithoutstatus = 
        // console.log(await Products.find({status : {$exists: true}}))
        return NextResponse.json({ allProducts, productCount })

    } catch (error) {
        console.log('product route error', error)
    }
}




// export async function PUT ( ){
//     try{
//         await connected()
//         await Products.updateMany(
//             {status : {$exists: false}},
//             { 
//                 $set:{
//                     status: "Published"
//                 }
//             }
//         );
//         console.log("Successfully updated")
//         return NextResponse.json({message:"Successfully Updated"})
//     }catch(error){
//         console.log("error" , error)
//     }
// }


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