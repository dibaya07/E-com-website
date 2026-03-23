
import { Products } from "@/models/product";
import Image from "next/image";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import ProductSpecification from "../components/ProductSpecification";
import CustomerReviews from "../components/CustomerReviews";
import { productIdParams } from "../../types/product.types";

export default async function page({ params }: productIdParams) {
  const { id } = await params;

  const res = await Products.findById({ _id: id });

  return (
    <div>

   
    <div className="flex flex-col bg-(--gray) px-5 py-2 h-[80vh] overflow-hidden pt-10">
      <div className="flex gap-10 h-[85%]">
        <div className="img w-1/2 flex  gap-5 ">
          <div className="allImgs  p-2 w-[20%] flex flex-col justify-start items-center gap-2 overflow-y-scroll">
            <Image
              src={"/productImg.jpeg"}
              alt="product img"
              width={100}
              height={60}
              className="rounded-md"
            />
            <Image
              src={"/productImg.jpeg"}
              alt="product img"
              width={100}
              height={60}
            />
          </div>
          <div className="flex-1  flex justify-center bg-white py-2 rounded-md">
            <Image
              src={"/productImg.jpeg"}
              alt="product img"
              width={350}
              height={100}
              // className="rounded-md"
            />
          </div>
        </div>
        <div className="details flex-1  px-2 pr-3 flex flex-col gap-1.5">
          <div className="text-xl font-medium tracking-wider">{res.title}</div>
          <div className="text-sm text-gray-600">{res.brand}</div>
          <div className="text-sm text-gray-600">{res.rating} Rating</div>
          <div className="text-lg font-medium">{res.price}</div>
          <div className="text-gray-600 text-[15px]">{res.description}</div>

          <div className="flex gap-5">
            <span className="flex justify-center items-center gap-4 border border-gray-500/80 h-fit rounded-md w-[20%] bg-white">
              <button
                className={`text-xs hover:bg-blue-300/40 p-3 rounded-l-md cursor-pointer disabled:text-black/50 disabled:cursor-not-allowed disabled:hover:bg-blue-300/10`}
              >
                <FaMinus />
              </button>
              1
              <button
                className={`text-xs hover:bg-blue-300/40 p-3 rounded-r-md cursor-pointer  disabled:cursor-not-allowed disabled:hover:bg-blue-300/10 disabled:text-black/50`}
              >
                <FaPlus />
              </button>
            </span>
            <button className="px-6 py-1 border-2 border-blue-800 rounded-md flex-1 bg-white">Add to cart</button>
          </div>

          <button className="bg-(--blue) text-white py-2 rounded-md">Buy Now</button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 flex-1">
        <span>Free shipping</span>
        <span>2 Year Warranty</span>
        <span>30 Day Returns</span>
      </div>
    </div>
      <ProductSpecification/>
      <CustomerReviews/>
     </div>
  );
}
