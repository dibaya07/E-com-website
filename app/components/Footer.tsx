import React from 'react'
import { FaBagShopping } from 'react-icons/fa6'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import SubFooter from './SubFooter';


 
export default function Footer() {
  return (
   <div className='bg-white'>
    <div className='flex justify-start  px-4 py-14 w-full'>
      <div className='flex flex-col w-1/5 mr-20 gap-2'>
        <div className='flex justify-start gap-4 '>
        <span className='text-md bg-(--blue) text-white flex justify-center items-center p-2 rounded-md '><FaBagShopping /></span>
        <span className='text-xl font-medium '>zentro</span>
        </div>
        <p className='text-md text-black/70 my-3 text-balance'>Lorem ipsum dolor sit amet ssimos similique molestias cumque cum.</p>
        <div className='flex gap-4'>
            <span className='p-2 bg-black/10 rounded-full text-xl'><FaFacebook /></span>
            <span className='p-2 bg-black/10 rounded-full text-xl'><AiFillInstagram /></span>
            <span className='p-2 bg-black/10 rounded-full text-xl'><MdAlternateEmail /></span>
        </div>
      </div>
     <div className='flex gap-60 flex-1'>
       <div className='flex flex-col gap-2 mr-9'>
        <span className='text-xl font-medium'>Shop</span>
        <span className='text-md text-gray-800/80'>New arrivals</span>
        <span className='text-md text-gray-800/80'>Best sellers</span>
        <span className='text-md text-gray-800/80'>Deals and promotions</span>
        <span className='text-md text-gray-800/80'>Categories</span>
      </div>
      <div className='flex flex-col gap-2 mr-9'>
        <span className='text-xl font-medium'>Support</span>
        <span className='text-md text-gray-800/80'>Help Center</span>
        <span className='text-md text-gray-800/80'>Order Status</span>
        <span className='text-md text-gray-800/80'>Return & Refund</span>
        <span className='text-md text-gray-800/80'>Contact Us</span>
      </div>
      <div className='flex flex-col gap-2 mr-9'>
        <span className='text-xl font-medium'>Company</span>
        <span className='text-md text-gray-800/80'>About Us</span>
        <span className='text-md text-gray-800/80'>Carrers</span>
        <span className='text-md text-gray-800/80'>Privacy Policy</span>
        <span className='text-md text-gray-800/80'>Terms of Service</span>
      </div>
     </div>
    </div>
     <SubFooter/>
   </div>
  )
}
