import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import Link from "next/link";
import CartIItemCount from "../cart/components/CartIItemCount";
import { Show, UserButton } from "@clerk/nextjs";


export default function Navbar() {
  return (
    <div className=" flex justify-between my-2 px-2 py-2">
      <Link
        href={"/"}
        className="flex justify-start items-center pl-4  w-[12%] gap-3 cursor-pointer"
      >
        <span className=" bg-(--blue) text-white flex justify-center items-center p-1 rounded-md">
          <FaBagShopping />
        </span>
        <span className="font-semibold text-xl tracking-wider">Zentro</span>
      </Link>
      {/* <BrandLogo/> */}
      <div className="searchBar bg-(--gray) flex  justify-between flex-1 p-2 rounded-full mx-2">
        <span className=" flex justify-center items-center mx-1.5 ">
          <IoSearch />
        </span>
        <input
          type="text"
          placeholder="Search for products, Brands and more.."
          className="flex-1"
        />
        <button className="bg-(--blue) flex justify-center items-center text-white rounded-full p-2">
          <FaArrowRight />
        </button>
      </div>
      <div className=" w-[24%] flex justify-center items-center gap-10">
        <span className="text-lg">
          <FaRegHeart />
        </span>
        <span className="flex gap-1.5">
          <Show when="signed-out">
            <Link href={"/sign-in"}>Sign In</Link>
            <Link href={"/sign-up"}>Sign Up</Link>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </span>
        <CartIItemCount />
        <Link
          href={"/cart"}
          className="bg-(--gray) text-(--blue) text-xl p-2 rounded-full"
        >
          <IoMdCart />
        </Link>
      </div>
    </div>
  );
}
