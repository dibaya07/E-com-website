import React from 'react'

export default function Filter() {
  return (
     <div className="left bg-gray-400 w-1/5">
          <div className='flex '>
          <span>Filters</span>
          <span>clear all</span>
          </div>
          <div className='flex flex-col'>
            <span>categories</span>
            <div>
            <input type="checkbox" placeholder='headphone'/> 
            <span>product options</span>
            </div>
          </div>
        </div>
  )
}
