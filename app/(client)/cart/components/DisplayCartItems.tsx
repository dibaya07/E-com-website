import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { DisplayCartProp, Products } from "../../types/product.types";

export default function DisplayCartItems({handleQuantity , handleRemove, cartItems, allCarts , PriceFormat} : DisplayCartProp) {
  return (
     <div className="right  w-[70%] ">
              <div >
                <div className="titles flex  text-gray-500/90 border-b border-black/30">
                <span className="pb-2 flex  w-[180%]">Product</span>
                <div className="flex w-full justify-between">
                <span className="pb-2">Quantity</span>
                <span className="pb-2 text-end">Price</span>
                </div>
                </div>
                {/* <div className="products "> */}
                {/* {cartItems.length <= 0 && <span>Loading ...</span>} */}
                <ul className="my-2 w-full scr  "> 
                  {cartItems.length > 0 && cartItems?.map((item: Products) => {
                    const itemStock = allCarts?.filter(data=>data.id == item._id)[0] || 0
                    return (
                      <li key={item._id} className="flex py-4 border-b border-black/30">
                        <span className="gap-3 flex w-[180%]">
                        <Image
                          src="/productImg.jpeg"
                          alt="product image"
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                        <span className="font-medium">{item.title}</span>
                        </span>
                        <div className="flex w-full justify-between items-center">
    
                          {/* quantity */}
    
                          <span className="flex justify-center items-center gap-4 border border-gray-500/80 h-fit rounded-md">
                              <button className={`text-xs hover:bg-blue-300/40 p-3 rounded-l-md cursor-pointer disabled:text-black/50 disabled:cursor-not-allowed disabled:hover:bg-blue-300/10`} onClick={()=>handleQuantity(item._id,item.stock,"decrease")} disabled={itemStock?.qty <= 1}>
                                  <FaMinus />
                              </button>
    
                               {item.stock ? allCarts.filter(data => data.id == item._id)[0]?.qty : 1}
                                
                              <button className={`text-xs hover:bg-blue-300/40 p-3 rounded-r-md cursor-pointer  disabled:cursor-not-allowed disabled:hover:bg-blue-300/10 disabled:text-black/50`} onClick={()=>handleQuantity(item._id,item.stock,"increase")} disabled={itemStock?.qty >= item.stock }>
                                <FaPlus />
                              </button>
                          </span>
    
                        <span className="flex flex-col justify-center items-end">
                          <span className="font-medium">{PriceFormat(itemStock?.qty * item.price) || 0}</span>
                          <button className="flex gap-1 justify-center items-center text-xs my-1 text-gray-500/90 hover:text-black hover:underline hover:text-[13px]" onClick={()=>handleRemove(item._id)}><MdOutlineDeleteOutline />Remove</button>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="text-center text-lg font-medium text-black/60 my-10 ">{allCarts.length <= 0 && "Cart is empty"}</div>
                </div>
              <Link href={'/products'} className="flex justify-start items-center gap-2 text-blue-600 "  > <span className="text-xs"><FaArrowLeftLong /></span><span className="text-sm">Continue Shopping</span></Link>
            </div>
  )
}

