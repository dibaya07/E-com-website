import React from 'react'

export default function Product_management() {
  return (
    <div>
      <span>Product Management</span>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-3 bg-rose-400'>
            <input type="text" placeholder='Search products'/>
            <button>All categories</button>
            <button>status</button>
            <button>Add new product</button>
        </div>
        <div>
            <div className='flex gap-3 bg-gray-600'>
                <span>Product name</span>
                <span>Category</span>
                <span>Price</span>
                <span>stock level</span>
                <span>status</span>
            </div>
            <ul className='flex gap-3 flex-col'>
                <li className='bg-pink-600 flex gap-3 '>
                <input type="checkbox" />
                <span>Product name</span>
                <span>Category</span>
                <span>Price</span>
                <span>stock level</span>
                <span>status</span>
                </li>
                <div>
                <span>showing 1-5 of 248 products</span>
                <span>pagination</span>
                </div>

            </ul>
        </div>
      </div>
    </div>
  )
}
