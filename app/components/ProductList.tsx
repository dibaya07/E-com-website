"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { products } from "../types/product.types";


export default  function ProductList() {
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  // await connected()
  // const allProducts = await Products.find();
  const getAllProducts = async()=>{
    try{
    const res = await fetch('/api/products')
    const data = await res.json()
    // console.log(data)
    // if(allProducts.length == 0 ){
      // console.log('hi')
      // console.log(allProducts.length )
      setAllProducts(data)
    // }
    }catch(error){
      console.log('productlist error', error)
    }finally{
      setLoading(false)
    }
    // console.log(allProducts)
  }

  useEffect(() => {
   getAllProducts()
  }, [])

  // useEffect(() => {
  //   console.log(allProducts)
  // }, [allProducts])
  
  const productHandler = ()=>{
    console.log('product clicked ')
  }

  if (loading) return<div>loading...</div>
 
  return (
    <div className="flex flex-wrap justify-around">
      {!loading && allProducts.length > 0 && allProducts.map((item : products) => {
        // {console.log(item)}
        return (
          <div className="flex flex-col mt-2 ml-2 bg-blue-400 border border-solid border-black w-1/4 cursor-pointer" key={item._id} onClick={productHandler} >  
            
            
            <span className="border border-solid border-black flex justify-center items-center">
            <Image src='/productImg.jpeg' alt="product image" width={100} height={100} />
            </span>
            <span>{item.brand}</span>
            <span>{item.title}</span>
            <span>rating</span>
            
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>{item.price - 100}</span>
                <span className="line-through">{item.price} </span>
              </div>
              <button className="bg-red-600">add to cart</button>
            </div> 
          </div>
        );
      })}
    </div>
  );
}


