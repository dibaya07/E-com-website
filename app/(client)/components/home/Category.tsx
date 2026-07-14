import Link from "next/link";
import React from "react";
import { ImHeadphones } from "react-icons/im";

export default function Category() {
  return (
    <div className=" py-2 my-4">
      <div className="flex justify-between py-3">
        <span className="font-semibold text-sm sm:text-xl">
          Shop by Category{" "}
        </span>
        <Link
          href={"/products"}
          className="text-(--blue) hover:underline text-xs sm:text-base"
        >
          View all &#8594;
        </Link>
      </div>

      <div className="flex gap-8 overflow-x-scroll [scrollbar-width:none]">
        <Link
          href={"/products"}
          className="bg-white w-[40%] md:w-[16%] lg:w-[12%] flex flex-col items-center justify-center px-2 py-2 sm:py-4 gap-1.5 sm:gap-3 rounded-xl my-2"
        >
          <span className="bg-blue-300/30 text-(--blue) text-sm sm:text-xl p-4 rounded-full">
            <ImHeadphones />
          </span>
          <span className="font-medium text-black/80 text-sm sm:text-base">
            Headphones
          </span>
        </Link>
      </div>
    </div>
  );
}
