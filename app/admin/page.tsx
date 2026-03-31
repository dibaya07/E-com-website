"use client"
import { redirect } from "next/navigation";
import DashBoard from "./components/DashBoard";

export default function Home() {
   const isLogin = localStorage.getItem("admin")
      if(!isLogin){
          redirect('/admin/sign-in')
      }
  return (
    
    <DashBoard />

  );
}
