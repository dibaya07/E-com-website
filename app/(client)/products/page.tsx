import { IoFilter } from "react-icons/io5";
import { Products_searchParams_Prop } from "../types/product.types";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { TiArrowSortedDown } from "react-icons/ti";
import { redis } from "@/lib/redis";

export default async function Products({
  searchParams,
}: Products_searchParams_Prop) {
  const page = Number((await searchParams).page) || 0;

  const cachedData = await redis.get(`products:${page}`);
  let allProducts;
  if (cachedData) {
    console.log("got cached data")
    allProducts = JSON.parse(cachedData);
  } else {
    console.log("Did api call")
    const res = await fetch(`${process.env.APP_URL}/api/products?page=${page}`);
    allProducts = await res.json();
    // console.log(allProducts)
    await redis.set(`products:${page}`, JSON.stringify(allProducts));
  }

  // console.log(allProducts)

  // console.log("hello")
  return (
    <>
      <div className="bg-(--gray) py-3 px-5 hidden sm:block">
        <div className="hidden sm:flex gap-2">
          <button className="text-sm">Home &gt;</button>
          <button className="text-sm">Category name &gt;</button>
        </div>
        <div className="text-2xl font-medium my-2 lg:my-4">Headphones</div>
        <div className="flex gap-2 lg:gap-6 ">
          <Filter />
          <div className="right flex flex-col gap-4 flex-1 px-2 lg:px-4 ">
            <Sort />
            <ProductList allListedProducts={allProducts} />
            <Pagination page={page} totalProduct={allProducts.productCount} />
          </div>
        </div>
      </div>

      {/* MobileView */}
      <div className="bg-(--gray)  block sm:hidden ">
        <div className="flex text-base bg-white py-1.5 border border-black/6">
          <span className="w-1/2 flex justify-center items-center gap-1.5 border-r border-black/6">
            {" "}
            <IoFilter /> Filter
          </span>
          <span className="w-1/2 flex justify-center items-center gap-1.5 border-l border-black/6">
            <TiArrowSortedDown /> Sort
          </span>
        </div>
        <div className="text-2xl font-medium my-4 px-2.5">Headphones</div>
        <div className="flex flex-col gap-2 px-2.5 pb-3">
          {/* <div className="right flex flex-col gap-4 flex-1 px-4 "> */}
          <ProductList allListedProducts={allProducts} />
          <Pagination page={page} totalProduct={allProducts.productCount} />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
