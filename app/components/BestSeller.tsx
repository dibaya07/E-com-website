import React from "react";
import Image from "next/image";

export default function BestSeller() {
  return (
    <div className=" my-4 py-2 ">
      <span className="font-semibold text-xl tracking-wider">Best Seller</span>
      <div className="  flex gap-8">

    
      <div className="bg-white w-1/4 flex my-3 p-4 rounded-xl">
        <span className="p-2 bg-(--gray)/70 rounded-xl">
          <Image
            src="/productImg.jpeg"
            alt="Product image"
            width={80}
            height={100}
          />
        </span>
        <div className="flex flex-col justify-between flex-1 px-3 py-1.5">
          <span className="flex flex-col">
            <span className="text-black font-medium">JBL headphone</span>
            <span className="text-gray-500 font-medium">
              48 hr battery limit
            </span>
          </span>
          <span className="flex justify-between">
            <span className="text-(--blue) font-medium">&#8377;999</span>
            <button className="text-sm">Add to cart</button>
          </span>
        </div>
      </div>
        </div>
    </div>
  );
}
