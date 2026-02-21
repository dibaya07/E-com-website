import connected from "@/config/dbConnect"
import { Products } from "@/models/product"


export async function GET (request : Request){
    try{
        await connected()
        const allProducts = await Products.find()
        // console.log(allProducts)
        return Response.json(allProducts)

        return Response.json({message:'did you get your data'})
    }catch(error){
        console.log('product route error', error)
    }
}