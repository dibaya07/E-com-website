import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";



export default function Navbar() {
  return (
    <div className="flex py-4 bg-white justify-between border-b border-(--gray)">
      <Link
        href={"/admin"}
        className="flex justify-start items-center pl-4  w-[15%] gap-3 cursor-pointer "
      >
        <span className=" bg-(--blue) text-white flex justify-center items-center p-1 rounded-md">
          <FaBagShopping />
        </span>
        <span className="font-semibold text-xl tracking-wider">Zentro</span>
      </Link>
      <span className="bg-(--gray)/40 px-2 py-1 border border-gray-400 flex-1 ml-3 mr-96 flex gap-1.5 rounded-md">
        <span className=' flex justify-center items-center mx-1.5 '><IoSearch /></span>
        <input type="text" placeholder="Search" />
      </span>
      <div className="w-[14%] flex justify-around text-2xl">
      <span className="text-gray-700"><IoMdNotifications /></span>
      <span><GoPersonFill /></span>
      </div>
    </div>
  );
}
