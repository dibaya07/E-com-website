import React from "react";
import Image from "next/image";
import { IoMdCart } from "react-icons/io";

export default function BestSeller() {
  return (
    <div className=" my-4 py-2 ">
      <span className="font-semibold text-base sm:text-xl tracking-wider">Best Seller</span>
      <div className="  flex gap-3 sm:gap-8 overflow-x-scroll [scrollbar-width:none]">

    
      <div className="bg-white w-[50%] md:w-[40%] lg:w-[30%] xl:w-1/4 flex sm:flex-row flex-col my-3 p-2 sm:p-4 rounded-xl">
        <span className="p-2 bg-(--gray)/70 rounded-xl flex justify-center items-center mb-3.5 sm:mb-0">
          <Image
            src="/productImg.jpeg"
            alt="Product image"
            width={80}
            height={100}
          />
        </span>
        <div className="flex flex-col justify-between flex-1 px-1.5 sm:px-3 py-1.5">
          <span className="flex flex-col mb-3 sm:mb-0">
            <span className="text-black font-medium text-sm sm:text-base">JBL headphone</span>
            <span className="text-gray-500 font-medium sm:text-base text-xs">
              48 hr battery limit
            </span>
          </span>
          <span className="flex justify-between">
            <span className="text-(--blue) font-medium flex justify-center items-center">&#8377;999</span>
            <button className="text-sm hidden sm:flex justify-center items-center">Add to cart</button>
            <button className="text-sm sm:hidden p-1 hover:text-white hover:bg-[#0f3fff]">  <IoMdCart size={25}/></button>
          </span>
        </div>
      </div>

    
    

    
        </div>
    </div>
  );
}
