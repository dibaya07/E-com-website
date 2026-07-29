import React from "react";
import { FaBagShopping } from "react-icons/fa6";
// import { IoSearch } from "react-icons/io5";
// import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import Link from "next/link";
import CartIItemCount from "../cart/components/CartIItemCount";

// import AdminBtn from "./AdminBtn";
import MenuBtn from "./MenuBtn";
// import Authentication from "./Authentication";
import SearchBar from "./SearchBar";
// import { Authentication } from "./Authentication";
// import { auth, currentUser } from '@clerk/nextjs/server'

export default function Navbar() {
  return (
    <div className=" flex justify-between my-2 px-2 sm:py-2 items-center">
      {/* <div className="bg-green-600  flex justify-between w-[60%]"> */}
      <MenuBtn />

      {/* logo */}
      <Link
        href={"/"}
        className="flex justify-center sm:justify-start items-center ml-8 sm:ml-0 md:pl-2 lg:pl-4  flex-1 sm:flex-none sm:w-[17%] lg:w-[12%] gap-1.5 sm:gap-3 cursor-pointer"
      >
        <span className=" bg-(--blue) text-white flex justify-center items-center p-1 rounded-md">
          <FaBagShopping />
        </span>
        <span className="font-semibold text-xl tracking-wider">Zentro</span>
      </Link>

      {/* search bar */}
      <SearchBar />

      <div className="md:w-[30%]  xl:w-[24%] flex justify-center items-center gap-3.5 md:gap-6 lg:gap-10 ">
        {/* admin panel */}
        {/* <AdminBtn /> */}

        {/* wishlist */}
        <span className="text-lg hidden sm:flex">
          <FaRegHeart />
        </span>

        {/* authentication buttons */}
        {/* <Authentication /> */}

        {/* cartlogo */}
        <Link
          href={"/cart"}
          className="bg-(--gray) text-(--blue) text-xl p-2 rounded-full relative"
        >
          <CartIItemCount />
          <IoMdCart />
        </Link>
      </div>
    </div>
  );
}
