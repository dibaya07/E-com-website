import connected from "@/config/dbConnect"
import { Products } from "@/models/product"


export async function GET (request : Request){
    try{
        await connected()
        const allProducts = await Products.find()
        // console.log(allProducts[0])
        return Response.json(allProducts)
    }catch(error){
        console.log('product route error', error)
    }
}