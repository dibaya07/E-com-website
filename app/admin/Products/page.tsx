// "use client"

// import Image from "next/image";
// import { MdEdit } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
import Products_btns from "./component/Products_btns";
import Products_list from "./component/Products_list";
import Products_header from "./component/Products_header";
import Pagination from "../components/Pagination";
// import axios from "axios";
// import { useEffect } from "react";
// import { ProductState  } from "@/app/(client)/types/product.types";


const getProducts = async()=>{

const res = await fetch("http://localhost:3000/api/admin/products")
return await res.json() 
}

export default async function page() {
const allProducts =await getProducts() 

  

  return (
    <div className='px-8 py-4 bg-(--gray) flex-1 flex flex-col gap-5'>
      <h2 className='text-2xl font-medium tracking-wider'>Product Management</h2>
      <div className='flex flex-col gap-2'>
            <Products_btns/>


        <div className="bg-white border border-gray-400/60 rounded-md ">
        <Products_header />
         <ul className='flex  flex-col border-t border-gray-400/60 h-[56vh] overflow-hidden' >
           <Products_list allProducts = {allProducts}/>


            </ul>
            <div className="px-3 py-3 bg-gray-500/20 ">
                <span className="text-sm">showing 1-5 of 248 products</span>
                <Pagination totalProduct={allProducts.length}/>
                </div>

        </div>


      </div>
    </div>
  )
}



//focus:border-blue-900/60 outline-0