"use client"
import { setCarts } from '@/app/features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import  { useEffect } from 'react'

export default function InitCart() {
    const dispatch = useAppDispatch()
    const allCarts = useAppSelector((state)=>state.cartReducer.allCarts)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("products") || "[]")
        dispatch(setCarts(data))
    }, [])
  
    useEffect(() => {
    if(allCarts.length > 0){
      localStorage.setItem("products",JSON.stringify(allCarts))
    }else{
      localStorage.removeItem("products")
    }
  }, [allCarts])
    
  return null 
}
