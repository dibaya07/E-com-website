import { sampleProducts } from "../data/data.ts";
import connected from "../config/dbConnect.ts";
import { Products } from "../models/product.ts";

const seedProducts = async()=>{
    await connected();
    
    await Products.deleteMany();
    await Products.insertMany(sampleProducts)
}

seedProducts()
.then(()=>{
    console.log('seeding done')
    process.exit(); //it stops node js programme immediately
})
.catch((error) =>{
    console.log('error in seeding', error)
    process.exit(1);
})