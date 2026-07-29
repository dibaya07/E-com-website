import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

import Image from "next/image";
// import ShopBtn from "./ShopBtn";
import Link from "next/link";
// import AdminBtn from "../AdminBtn";

export default function Banner() {
  return (
    <div className="bg-[#002455]  flex sm:flex-row flex-col-reverse my-3 rounded-2xl ">
      <div className="leftPart w-full sm:w-3/5 p-4  sm:p-10 flex flex-col mt-16 sm:mt-0">
        <div className=" border border-blue-500 bg-blue-500/40 px-2 flex self-start items-center justify-center gap-1.5 rounded-full mb-3 sm:mb-6 text-xs">
          <span className="text-blue-400 flex items-center mt-0.5 ">
            <GoDotFill />
          </span>
          <span className="text-white text-xs font-semibold">
            {" "}
            NEW COLLECTION 2026
          </span>
        </div>
        <h2 className="text-white text-3xl sm:text-5xl font-semibold sm:my-1">
          Elevate your
        </h2>
        <span className="text-(--blue) text-3xl sm:text-5xl font-semibold sm:my-1">
          Digital Life
        </span>
        <p className="text-xs sm:text-lg w-full sm:w-3/4 text-white/65 sm:my-4 mt-2 sm:mt-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, dicta.
          <span className="hidden sm:block">
            Error ullam exercitationem repellat accusamus error excepturi iste,
            ullam, dolorum unde numquam delectus veritatis!
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 py-4 sm:py-6">
          {/* <button className="px-6 py-3 bg-(--blue) flex justify-center items-center gap-1 text-white font-semibold rounded-xl">Shop Now <FaArrowRight /></button> */}
          {/* <ShopBtn/>  onClick={handleClick}  */}
         {/* <span className="flex gap-4 "> */}
           <Link
            href={"/products?page=0"}
            className="px-6 py-3 bg-(--blue) flex flex-1 sm:flex-none  sm:mx-0 justify-center items-center gap-1 text-sm sm:text-base text-white font-semibold rounded-xl"
          >
            Shop Now <FaArrowRight />
          </Link>
          {/* <button className="px-6 py-3 text-white font-medium rounded-xl border border-white/50 hidden sm:block">
            View Catalog
          </button>
         </span> */}
          {/* <AdminBtn/> */}
        </div>
      </div>
      <div className="right sm:flex flex-1 justify-center items-center hidden">
        <Image
          src="/productImg.jpeg"
          alt="banner Image"
          // fill
          width={250}
          height={100}
        />
      </div>
    </div>
  );
}
