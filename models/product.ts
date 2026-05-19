import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    brand: String,
    category: String,
    price: Number,
    stock: Number,
    rating: Number,
    description: String,
    owner : String,
    role : {
        type : String,
        default : "user"
    }
},{timestamps:true})

export const Products = mongoose.models.Product || mongoose.model('Product', productSchema)