"use client"
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function AdminBtn() {
    const {isSignedIn ,user} = useUser()

  return (
    <>
    {isSignedIn &&  user?.publicMetadata?.role === "admin" && <Link href={"/admin"} className=" text-base hover:font-medium hover:bg-(--gray) px-2 py-1 hover:rounded-lg">Dashboard</Link>}
    </>
  )
}
