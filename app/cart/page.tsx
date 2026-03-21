"use client";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
// import { stat } from 'fs'
import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { MdOutlineDeleteOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { removeFromCart, updateQty } from "../features/cart/cartSlice";
import DisplayCartItems from "./components/DisplayCartItems";
import { Products } from "../types/product.types";
// import {Products} from '@/app/types/product.types'



export default function Page() {
  const allCarts = useAppSelector((state) => state.cartReducer.allCarts);
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();
  const dispatch = useAppDispatch()
  const [price, setPrice] = useState(0)
  const [taxs, setTaxs] = useState(0)

  const cartData = async () => {
    if (allCarts.length > 0) {
      const allCartsIds = allCarts.map(item=>item.id)
      const res = await axios.post("/api/cart", { allCarts : allCartsIds });
      if (res.data.allCarts) {
        // console.log(res.data)
        setCartItems(res.data.allCarts);
      }
    }
  };

 const calculatePrice = ()=>{
    let totalPrice = 0;
    cartItems?.map((item : Products)=> totalPrice += item.price)
    setPrice(totalPrice)
    const tax = Math.ceil(totalPrice * 0.18)
    setTaxs(tax) 

  }



  useEffect(() => {
    if (allCarts.length > 0) {
      cartData();
      // calculatePrice()
    }else{
      setCartItems([])
    }
  }, [allCarts]);

  useEffect(() => {
  //  console.log(price)
   calculatePrice()
  }, [cartItems])
  

  const handleQuantity = (id:string ,stock:number, status : string)=>{
    if(stock > 1 ){
      dispatch(updateQty({status : status, id : id }))
    }
  }

  const handleRemove = (id:string)=>{
    dispatch(removeFromCart({id: id}))
  }

  const handleRouting = ()=>{
    router.push('/products')
  }

 


  return (
    <div className="px-5 py-2 bg-(--gray) pb-28">
      <div className="my-8">
        <span className="text-2xl font-medium tracking-wider">Shopping Cart</span> <span className="text-gray-500/90">({allCarts.length} items)</span>
      </div>
      <div className="flex gap-10">

        <DisplayCartItems handleQuantity={handleQuantity} handleRemove={handleRemove} handleRouting={handleRouting} cartItems={cartItems} allCarts={allCarts}/>


        <div className="left flex-1 bg-white py-4 px-4 rounded-lg">
          <span className="font-medium text-lg">Order Summary</span>
          <div className=" flex justify-between">
            <span className="text-gray-500/90">Subtotal</span>
            <span>{price}</span>
          </div>
          <div className=" flex justify-between">
            <span className="text-gray-500/90">Shipping</span>
            <span className="text-green-600 font-light">Free</span>
          </div>
          <div className=" flex justify-between">
            <span className="text-gray-500/90">Tax estimate</span>
            <span>{taxs}</span>
          </div>
          <div className="py-4 border-b border-gray-500/80">
            <span>Promo code</span>
            <span className="flex gap-2 my-1">
              <input type="text" placeholder="Enter code" className="flex-1 border border-gray-500/80 py-1 px-2 rounded-md"/>
              <button className="bg-blue-200/30 px-2 py-1 text-sm rounded-md">Apply</button>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total</span>
            <span>
              <span className="text-sm text-gray-500/80">currency</span>
              <span className="font-medium">{price + taxs}</span>
            </span>
          </div>

          
        </div>
      </div>
    </div>
  );
}
