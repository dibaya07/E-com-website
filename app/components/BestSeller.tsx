import React from 'react'

export default function BestSeller() {
  return (
    <div className='bg-yellow-400'>
      <span>best seller</span>
      <div className='bg-gray-500 w-1/6 flex'>
        <span>img</span>
        <div className='flex flex-col justify-between flex-1'>
            <span className='flex flex-col'>
            <span>item name</span>
            <span>item data</span>
            </span>
            <span className='flex justify-between bg-amber-500 '>
                <span>price</span>
                <button>add to cart</button>
            </span>

        </div>
      </div>
    </div>
  )
}
