import React from 'react'

export default function Filter() {
  return (
     <div className="left bg-white w-[22%] lg:w-1/5 h-fit px-2 lg:px-4 py-4 lg:py-6 flex flex-col gap-4 rounded-xl">
      {/* <div className='bg-white'> */}

     
          <div className='flex justify-between '>
          <span className='font-medium text-sm lg:text-base'>Filters</span>
          <span className='text-(--blue) text-sm lg:text-base'>Clear all</span>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-medium tracking-wider text-sm lg:text-base'>CATEGORIES</span>
            <div className='flex gap-2'>
            <input type="checkbox" placeholder='headphone'/> 
            <span className='text-sm lg:text-base'>product options</span>
            </div>
          </div>
           {/* </div> */}
        </div>
  )
}
