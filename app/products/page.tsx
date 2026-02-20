import React from 'react'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'

export default function Products() {
  return (
    <div className='bg-green-600'>
      <div className='flex'>
          <button>Home</button>
          <button>Category name</button>
      </div>
      <div>Category name</div>
      <div className='flex'>
       <Filter/>
        <div className="right flex flex-col bg-red-400 flex-1">
          <div>sort</div>
          <ProductList/>
        </div>
      </div>
    </div>
  )
}
