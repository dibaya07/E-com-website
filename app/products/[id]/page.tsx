import { productIdParams } from '@/app/types/product.types'
import { Products } from '@/models/product';
import Image from 'next/image';
import React from 'react'

export default async function page({params}: productIdParams) {
  // console.log(await params);
  const {id} = await params

  const res = await Products.findById({_id: id})
  // console.log("without docs",res)  
  // console.log("with docs",res._doc)  
  return (
    <div className='flex flex-col'>
      <Image src={'/productImg.jpeg'} alt='product img' width={100} height={100} />
      <span>{res.title}</span>
      <span>{res.brand}</span>
      <span>{res.category}</span>
      <span>{res.price}</span>
      <span>{res.stock}</span>
      <span>{res.rating}</span>
      <span>{res.description}</span>
      this is the id {id}
    </div>
  )
}
