"use client"
import Image from "next/image";
import { productListProp, Products } from "../types/product.types";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/hook";
import { useDispatch } from "react-redux";
import { setCarts } from "../features/cart/cartSlice";
import { useRouter } from "next/navigation";


export default  function ProductList({productHandler, allProducts, loading} : productListProp) {
  const allCarts = useAppSelector((state)=>state.cartReducer.allCarts)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleAdd = (e : React.MouseEvent<HTMLButtonElement> , id : string , isInCart : boolean)=>{
    e.stopPropagation();
    if(isInCart){
      router.push(`/cart`)
    }else{
      // const cartsData = 
          dispatch(setCarts([...allCarts, {id : id , qty : 1}]))
    }
  }

  // useEffect(() => {
  //   dispatch(setCarts(JSON.parse(localStorage.getItem("products") || "[]")))
  // }, [])
  
  
  // useEffect(() => {
  //   if(allCarts.length > 0){
  //     console.log('hello')
  //     localStorage.setItem("products",JSON.stringify(allCarts))
  //   }
  //   // console.log(allCarts)
  // }, [allCarts])


 if (loading) return<div>loading...</div>

  return (
    <div className="flex flex-wrap justify-start gap-x-16 gap-y-6 ">
      {!loading && allProducts.length > 0 && allProducts.map((item : Products) => {
        const isInCart = allCarts.map(data=>data.id ).includes(item._id)
        return (
          <div className="flex flex-col bg-white w-[29%] cursor-pointer gap-1.5 p-4 rounded-xl" key={item._id} onClick={()=>productHandler(item._id)} >  
            
            
            <span className=" flex justify-center items-center relative">
              <span className="absolute top-0 right-0 bg-blue-200/20 p-2 rounded-full text-sm"><FaRegHeart /></span>
            <Image src='/productImg.jpeg' alt="product image" width={150} height={100} />
            </span>
            <span className="text-sm text-black/60">{item.brand}</span>
            <span className="text-lg font-medium">{item.title}</span>
            <span className="text-black/60">rating</span>
            
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="font-medium text-lg">&#8377;{item.price}</span>
                <span className="line-through text-black/60 text-xs">&#8377;{item.price} </span>
              </div>
              <button className={`flex justify-center items-center text-(--blue) px-3 py-1 rounded-xl  gap-2 bg-blue-200/30 ${isInCart && " border-2 border-blue-800"}`} onClick={(e)=> handleAdd(e, item._id , isInCart)}> {!isInCart && <MdOutlineAddShoppingCart />} {isInCart ? "Go to cart" : "Add"}</button>
            </div> 
          </div>
        );
      })}
    </div>
  );
}

// (e)=>{e.stopPropagation(); isInCart ? router.push('/cart') :
