import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    brand: String,
    category: String,
    price: Number,
    stock: Number,
    rating: Number,
    description: String,
},{timestamps:true})

export const Products = mongoose.models.Product || mongoose.model('Product', productSchema)