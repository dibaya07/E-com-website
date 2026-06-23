import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    // id: Number,
    title: String,
    brand: String,
    description: String,
    category: String,
    price: Number,
    stock: Number,
    status: String,
    images: {
        type: [String],
        required: true,
        minLength: 1,
        maxLength: 3
    },
},{timestamps:true})

export const Products = mongoose.models.Product || mongoose.model('Product', productSchema)