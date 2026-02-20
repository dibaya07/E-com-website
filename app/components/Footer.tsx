import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col bg-gray-400'>
        <div>
        <span>lgo</span>
        <span>zentro</span>
        </div>
        <p>Lorem ipsum dolor sit amet ssimos similique molestias cumque cum.</p>
        <div>
            <button>fa</button>
            <button>cam</button>
            <button>mail</button>
        </div>
      </div>
      <div className='flex flex-col'>
        <span>shop</span>
        <span>new arrivals</span>
        <span>best sellers</span>
        <span>deals and promotions</span>
        <span>categories</span>
      </div>
      <div className='flex flex-col'>
        <span>support</span>
        <span>help</span>
        <span>order</span>
        <span>return</span>
        <span>contact</span>
      </div>
      <div className='flex flex-col'>
        <span>company</span>
        <span>about</span>
        <span>carrer</span>
        <span>privacy</span>
        <span>terms</span>
      </div>
    </div>
  )
}
