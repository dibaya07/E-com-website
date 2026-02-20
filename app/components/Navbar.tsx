import React from 'react'

export default function Navbar() {
  return (
    <div className=' flex justify-between'>
      <div className='flex justify-start bg-amber-300 w-1/4 gap-6'>
      <span>lgo</span>
      <span>Zentro</span>
      </div>
      <div className="searchBar bg-red-500 flex  justify-between flex-1">
        <span>Srchlgo</span>
        <input type="text" placeholder='Search for products, Brands and more..' className='flex-1'/>
        <button>sbmtLgo</button>
      </div>
      <div className='bg-amber-300 w-1/4 flex justify-around'>
      <span>wishlist</span>
      <span>account</span>
      <span>cart</span>
      </div>
    </div>
  )
}
