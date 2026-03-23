import React from 'react'
import { ImHeadphones } from "react-icons/im";


export default function Category() {
  return (
    <div className=' py-2 my-4'>
      <div className='flex justify-between py-3'>
      <span className='font-semibold text-xl'>Shop by Category</span>
      <span className='text-(--blue)'>View all &#8594;</span>
      </div>
      <div className='flex gap-8'>

      <div className='bg-white w-[12%] flex flex-col items-center justify-center px-2 py-4 gap-3 rounded-xl my-2'>
        <span className='bg-blue-300/30 text-(--blue) text-xl p-4 rounded-full'><ImHeadphones /></span>
        <span className='font-medium text-black/80'>Headphones</span>
      </div>
      </div>
    </div>
  )
}
