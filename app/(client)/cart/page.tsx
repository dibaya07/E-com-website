"use client";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
// import { stat } from 'fs'
import { useEffect, useState } from "react";
import { removeFromCart, updateQty } from "../features/cart/cartSlice";
import DisplayCartItems from "./components/DisplayCartItems";
import { Products } from "../types/product.types";
import TotalPrice from "./components/TotalPrice";
// import {Products} from '@/app/types/product.types'





export default function Page() {
  const allCarts = useAppSelector((state) => state.cartReducer.allCarts);
  const [cartItems, setCartItems] = useState([]);
  // const router = useRouter();
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
    let calculatePrice = 0;
    cartItems?.map((item : Products)=> {
      // return(
        allCarts.map(data=> {if(data.id == item._id) calculatePrice += data.qty * item.price})
      // )
    })
    if(calculatePrice > 0){
      const tax =Math.ceil(calculatePrice * 0.18)
      setPrice(calculatePrice)
      setTaxs(tax) 
    }

  }

  const PriceFormat = (value: number)=>{
    return new Intl.NumberFormat("En-IN",{style:"currency" , currency:"INR"}).format(value)
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


  // const handleCheckOut = async ()=>{

  // }

  return (
    <div className="px-5 py-2 bg-(--gray) pb-28">
      <div className="my-8">
        <span className="text-2xl font-medium tracking-wider">Shopping Cart</span> <span className="text-gray-500/90">({allCarts.length} items)</span>
      </div>
      <div className="flex gap-10  overflow-y-scroll h-[75vh] hide-scrollbar ">

        <DisplayCartItems handleQuantity={handleQuantity} handleRemove={handleRemove}  cartItems={cartItems} allCarts={allCarts} PriceFormat={PriceFormat}/>


        <TotalPrice PriceFormat={PriceFormat} price={price} taxs={taxs}/>
      </div>
    </div>
  );
}



