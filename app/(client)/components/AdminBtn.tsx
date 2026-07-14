"use client"
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function AdminBtn() {
    const {isSignedIn ,user} = useUser()

  return (
    <>
    {isSignedIn &&  user?.publicMetadata?.role === "admin" && <Link href={"/admin"} className="text-sm sm:text-base hover:font-medium bg-white hover:bg-(--gray) px-8 py-2 items-center rounded-lg  justify-center flex">Dashboard</Link>}
    </>
  )
}
