"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBagShopping } from "react-icons/fa6";

export default function BrandLogo() {
    const router = useRouter()
    const handleClick = ()=>{
        router.push("/")
    }
    
  return (
    <div className="flex justify-start items-center pl-4  w-[12%] gap-3" onClick={handleClick}>
      <span className="text-md bg-(--blue) text-white flex justify-center items-center p-1 rounded-md">
        <FaBagShopping />
      </span>
      <span className="font-semibold text-xl tracking-wider">Zentro</span>
    </div>
  );
}


