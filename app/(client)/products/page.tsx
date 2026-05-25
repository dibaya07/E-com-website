import { Products_searchParams_Prop } from "../types/product.types";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import ProductList from "./components/ProductList";

export default async function Products({ searchParams } : Products_searchParams_Prop) {
  const page = Number((await searchParams).page) || 0;

  // const res = await fetch(`http://localhost:3000/api/products?page=${page}`);
  const res = await fetch(`${process.env.APP_URL}/api/products?page=${page}`);
  const allProducts = await res.json();

  return (
    <div className="bg-(--gray) py-3 px-5 ">
      <div className="flex gap-2">
        <button className="text-sm">Home &gt;</button>
        <button className="text-sm">Category name &gt;</button>
      </div>
      <div className="text-2xl font-medium my-4">Headphones</div>
      <div className="flex gap-6 ">
        <Filter />
        <div className="right flex flex-col gap-4 flex-1 px-4 ">
          <div className="bg-white py-2.5 px-4 rounded-xl mr-2">Sort</div>
          <ProductList allListedProducts={allProducts} />
          <Pagination page={page} totalProduct={allProducts.productCount} />
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useEffect, useState } from "react";
// import { useAppSelector, useAppDispatch } from "@/lib/hook";
// import { setProducts } from "../features/product/productSlice";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Pagination from "./components/Pagination";

// const [totalProduct, setTotalProduct] = useState(0)
// const [page, setPage] = useState(0)
// const allProducts = useAppSelector((state) => state.productReducer.allProducts);
// const dispatch = useAppDispatch();
// const [loading, setLoading] = useState(true);
// const router = useRouter();

// const getAllProducts = async () => {
//   try {
//     const res = await axios.get(`/api/products?page=${page}`);
//     if(totalProduct == 0){
//       setTotalProduct(res.data.productCount)
//     }
//     dispatch(setProducts(res.data.allProducts));
//   } catch (error) {
//     console.log("productlist error", error);
//   } finally {
//     setLoading(false);
//   }
// };

// useEffect(() => {
//   getAllProducts();
// }, [page]);

// productHandler={productHandler}
// allProducts={allProducts}
// loading={loading}

{
  /* <Pagination handlePagination={handlePagination} page={page} totalProduct={totalProduct}/> */
}
