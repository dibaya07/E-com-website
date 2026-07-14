"use client"

import { useAppSelector } from "@/lib/hook"

export default function CartIItemCount() {
    const allCarts = useAppSelector((state)=>state.cartReducer.allCarts)
    
  return (
    <div className="bg-red-500 absolute top-0 right-0 text-[10px] sm:text-xs text-white px-1 rounded-full">
      {allCarts.length > 0 && allCarts.length || ""}
    </div>
  )
}
