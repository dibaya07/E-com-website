import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-[#002455]  flex my-3 rounded-2xl  ">
      <div className="leftPart w-3/5 p-10 flex flex-col ">
        <div className=" border border-blue-500 bg-blue-500/40 px-2 flex self-start items-center justify-center gap-1.5 rounded-full mb-6">
          <span className="text-blue-400 flex items-center mt-0.5">
            <GoDotFill />
          </span>
          <span className="text-white text-xs font-semibold"> NEW COLLECTION 2026</span>
        </div>
        <h2 className="text-white text-5xl font-semibold my-1">Elevate your</h2>
        <span className="text-(--blue) text-5xl font-semibold my-1">Digital Life</span>
        <p className="text-lg w-3/4 text-white/65 my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, dicta.
          Error ullam exercitationem repellat accusamus error excepturi iste,
          ullam, dolorum unde numquam delectus veritatis!
        </p>
        <div className="flex gap-4 py-6">
          <button className="px-6 py-3 bg-(--blue) flex justify-center items-center gap-1 text-white font-semibold rounded-xl">Shop Now <FaArrowRight /></button>
          <button className="px-6 py-3 text-white font-medium rounded-xl border border-white/50">View Catalog</button>
        </div>
      </div>
      <div className="right flex-1 flex justify-center items-center">
        <Image
          src="/productImg.jpeg"
          alt="banner Image"
          width={250}
          height={100}
        />
      </div>
    </div>
  );
}
