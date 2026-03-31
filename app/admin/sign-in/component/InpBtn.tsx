"use client"

import axios from "axios"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function AdminAuthBtn() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSignIn = async()=>{
    // console.log(password)
    // console.log(typeof(password))
    const res = await axios.post('/api/admin/sign-in',JSON.stringify(password))
    // console.log(res.data)
    if(res.data){
      setPassword("")
    }
    if(res.data.success == "true"){
        localStorage.setItem("admin","true")
        redirect("/admin")
    }else{
      setError(res.data.message)
        redirect("/admin/sign-in")
    }
  }

  useEffect(() => {
    const clearError =  setTimeout(() => {
      setError("")
    }, 10000);

  
    return () => {
      clearTimeout(clearError)
    }
  }, [error])
  
  
  return (
    <div className="flex flex-col justify-center items-center gap-3">
       <input 
       type="password" 
       placeholder="Enter your password" 
       value={password} 
       onChange={(e)=>setPassword(e.target.value)}
       className="bg-gray-300"
       />
      <button onClick={handleSignIn}>Sign In</button>
      {error && <span className="text-red-600">{error}</span>}
    </div>
  )
}
