import React from 'react'

export default function Subscribe() {
  return (
    <div className='bg-blue-900 flex flex-col justify-center items-center'>
      <span>logo</span>
      <span>subscribe to </span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, debitis maxime o! Aperiam quidem similique consequuntur temporibus cum quaerat suscipit distinctio.</p>
      <div>
        <input type="text" placeholder='Your email address' className='bg-white'/>
        <button>subscribe</button>
      </div>
      <span>we respect your privacy</span>
    </div>
  )
}
