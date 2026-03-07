import React from 'react'

export default function SubFooter() {
  return (
    <div className='flex justify-between bg-white border-t-2 border-black/60 mx-2 py-6'>
      <span className='font-medium text-sm'> &copy; 2026  Zentro All rights reserved </span>
      <div className='flex gap-3 text-black/80 text-sm'>
      <span>Secure payment</span>
      <span>Fast delivery</span>
      </div>
    </div>
  )
}
