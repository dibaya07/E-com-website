"use client"
import Image from "next/image";
import { productListProp, Products } from "../types/product.types";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { useAppSelector } from "@/lib/hook";



export default  function ProductList({productHandler, allProducts, loading} : productListProp) {
const [cartProduct, setCartProduct] = useState<string[]>( [])


  const handleAdd = ( id : string)=>{
    console.log("clicked")
    const alreadyIn = cartProduct?.includes(id)
    if(!alreadyIn){
      // console.log('not added')
      setCartProduct((prev)=>[...prev, id])
    }
    
  }
  
  useEffect(() => {
    // setCartProduct((prev)=>[...prev , localStorage.getItem("products")])
    localStorage.setItem("products",JSON.stringify(cartProduct))

  }, [cartProduct])

//     getCartData()

 if (loading) return<div>loading...</div>

//  { console.log((allProducts[0]._id))}
  return (
    <div className="flex flex-wrap justify-start gap-x-16 gap-y-6 ">
      {!loading && allProducts.length > 0 && allProducts.map((item : Products) => {
        return (
          <div className="flex flex-col bg-white w-[29%] cursor-pointer gap-1.5 p-4 rounded-xl" key={item._id} onClick={()=>productHandler(item._id)} >  
            
            
            <span className=" flex justify-center items-center relative">
              <span className="absolute top-0 right-0 bg-blue-200/20 p-2 rounded-full text-sm"><FaRegHeart /></span>
            <Image src='/productImg.jpeg' alt="product image" width={150} height={100} />
            </span>
            <span className="text-sm text-black/60">{item.brand}</span>
            <span className="text-lg font-medium">{item.title}</span>
            <span className="text-black/60">rating</span>
            
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="font-medium text-lg">&#8377;{item.price - 100}</span>
                <span className="line-through text-black/60 text-xs">&#8377;{item.price} </span>
              </div>
              <button className="flex justify-center items-center text-(--blue) px-3 py-1 rounded-xl bg-blue-200/30 gap-2" onClick={(e)=>{e.stopPropagation(); handleAdd(item._id ); }}><MdOutlineAddShoppingCart /> Add</button>
            </div> 
          </div>
        );
      })}
    </div>
  );
}


