import React from 'react'

export default function Banner() {
  return (
    <div className='bg-pink-400'>
      <div className="leftPart w-3/5">
        <span>new collection 2026</span>
        <h2>Elevate your digital life</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, dicta. Error ullam  exercitationem repellat accusamus error excepturi iste, ullam, dolorum unde numquam delectus veritatis!</p>
        <div className='flex gap-1'>
            <button>shop</button>
            <button>catalog</button>
        </div>
      </div>
      <div className="right flex-1">
        <img src="" alt="Product image" />
      </div>
    </div>
  )
}
