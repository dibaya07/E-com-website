"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Products } from "../types/product.types";
import { useAppSelector, useAppDispatch} from "@/lib/hook";
import { setProducts } from "../features/product/productSlice";



export default  function ProductList() {
  
  const allProducts = useAppSelector(state => state.allProducts)
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true)
  const getAllProducts = async()=>{
    try{
    const res = await fetch('/api/products')
    const data = await res.json()
      dispatch(setProducts(data))
    }catch(error){
      console.log('productlist error', error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
   getAllProducts()
  }, [])

  
  const productHandler = ()=>{
    console.log('product clicked ')
  }

  if (loading) return<div>loading...</div>
 
  return (
    <div className="flex flex-wrap justify-around">
      {!loading && allProducts.length > 0 && allProducts.map((item : Products) => {
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


// const [allProducts, setAllProducts] = useState([])

