import React from 'react'

export default function Add_product() {
  return (
    <div className=' flex flex-col'>
      <span>Add product</span>
      <div className='flex'>
        <div className="right bg-purple-400">
            <div className='flex flex-col gap-2'>
            <span>General information</span>
            <input type="text" placeholder='product name' />
            <textarea placeholder='description'></textarea>

            </div>
            <div className='flex flex-col gap-2'>
                <span>product media</span>
                <input type="file" />
            </div>
        </div>
        <div className="left bg-sky-500 flex flex-col gap-3">
            <div className='bg-red-400 flex flex-col gap-2'>
                <span>organization</span>
                <input type="text" placeholder='category'/>
            </div>
            <div className='bg-pink-500 flex flex-col gap-2'>
                <span>status</span>
            </div>
        </div>
      </div>
      <button className='py-2 bg-amber-800'>save product</button>
    </div>
  )
}
