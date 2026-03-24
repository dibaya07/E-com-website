import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { LiaCcAmex } from "react-icons/lia";
import { FaLock } from "react-icons/fa";
import { TotalPriceProp } from "../../types/product.types";
import Link from "next/link";
import ProceedBtn from "./ClientComponents";

export default function TotalPrice({PriceFormat, price, taxs} : TotalPriceProp) {
  return (
    <div className="left flex-1 h-fit bg-white py-4 px-6 rounded-lg flex flex-col gap-4 sticky top-0">
              <span className="font-medium text-lg">Order Summary</span>
              <div className=" flex justify-between">
                <span className="text-gray-500/90">Subtotal</span>
                <span>{PriceFormat(price)}</span>
              </div>
              <div className=" flex justify-between">
                <span className="text-gray-500/90">Shipping</span>
                <span className="text-green-600 font-light">Free</span>
              </div>
              <div className=" flex justify-between">
                <span className="text-gray-500/90">Tax estimate</span>
                <span>{PriceFormat(taxs)}</span>
              </div>
              <div className="py-4 border-b border-gray-500/80 pb-5">
                <span>Promo code</span>
                <span className="flex gap-2 my-1">
                  <input type="text" placeholder="Enter code" className="flex-1 border border-gray-500/80 py-1 px-2 rounded-md"/>
                  <button className="bg-blue-200/30 px-2 py-1 text-sm rounded-md">Apply</button>
                </span>
              </div>
              <div className="flex justify-between my-2">
                <span className="font-medium">Total</span>
                <span>
                  <span className="font-medium">{PriceFormat(price + taxs)}</span>
                </span>
              </div>
              <div className="proceed">
                {/* <Link href={'/checkout'} className="bg-blue-600 text-white w-full py-2 rounded-md">PROCEED TO CHECKOUT</Link> */}
                <ProceedBtn price={price} tax={taxs}/>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <span className="text-sm text-gray-600 flex gap-1 items-center"><FaLock />Secure Enrypted Checkout</span>
                <div className="flex gap-3 my-1.5">
                  <span><FaCcMastercard /></span>
                  <span><FaCcVisa /></span>
                  <span><LiaCcAmex /></span>
                </div>
              </div>
              
            </div>
  )
}
