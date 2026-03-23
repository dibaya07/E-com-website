"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function ShopBtn() {
    const router = useRouter()
    const handleClick = ()=>{
        router.push("/products")
    }
  return (
   <button className="px-6 py-3 bg-(--blue) flex justify-center items-center gap-1 text-white font-semibold rounded-xl" onClick={handleClick}>Shop Now <FaArrowRight /></button>
  )
}
