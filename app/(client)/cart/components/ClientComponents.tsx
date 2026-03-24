"use client"

import axios from "axios"
import { proceedBtnProp } from "../../types/product.types"

const handleProceed = async(price : number, tax : number)=>{
    const res = await axios.post("/api/checkout_sessions",{price, tax})
    // console.log("hellooooo",res.data)
    if(res.data){
        window.location.href = res.data.url
    }
}
export default function ProceedBtn ({price, tax} : proceedBtnProp){
    return(
        <button onClick={()=>handleProceed(price,tax)} className="bg-blue-600 text-white w-full py-2 rounded-md">PROCEED TO CHECKOUT</button>
    )
}