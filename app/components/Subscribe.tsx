import React from 'react'
import { MdOutlineMail } from "react-icons/md";


export default function Subscribe() {
  return (
    <div className='bg-[#081828] flex flex-col justify-center items-center py-10 rounded-xl my-10'>
      <span className='text-(--blue) my-4 text-4xl'><MdOutlineMail /></span>
      <span className='text-white text-3xl font-medium mb-3'>Subscribe to better service</span>
      <p className='text-white/50 text-md mb-4 w-1/2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, debitis maxime o! Aperiam quidem similique consequuntur temporibus cum quaerat suscipit distinctio.</p>
      <div className='flex gap-3 mb-3 w-full  justify-center items-center'>
        <input type="text" placeholder='Your email address' className='bg-white py-2 px-4 w-1/5 rounded-lg'/>
        <button className='bg-(--blue) px-3 py-2 rounded-lg'>subscribe</button>
      </div>
      <span className='text-white/50 text-sm mb-4'>we respect your privacy. Unsubscribe at any time.</span>
    </div>
  )
}
