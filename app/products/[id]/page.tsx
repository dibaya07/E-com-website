import { productIdParams } from '@/app/types/product.types'
import React from 'react'

export default async function page({params}: productIdParams) {
  console.log(await params);
  const {id} = await params
  return (
    <div>
      this is the id {id}
    </div>
  )
}
