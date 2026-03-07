import React from 'react'

export default function Filter() {
  return (
     <div className="left bg-white w-1/5 h-fit px-4 py-6 flex flex-col gap-4 rounded-xl">
      {/* <div className='bg-white'> */}

     
          <div className='flex justify-between '>
          <span className='font-medium '>Filters</span>
          <span className='text-(--blue)'>Clear all</span>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-medium tracking-wider'>CATEGORIES</span>
            <div className='flex gap-2'>
            <input type="checkbox" placeholder='headphone'/> 
            <span>product options</span>
            </div>
          </div>
           {/* </div> */}
        </div>
  )
}
