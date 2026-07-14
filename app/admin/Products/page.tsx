import Products_btns from "./component/Products_btns";
import Products_list from "./component/Products_list";
import Products_header from "./component/Products_header";
import { Product_searchParams_Prop } from "../types/admin_products.types";
import connected from "@/config/dbConnect";
import { Products } from "@/models/product";
// import { Product_searchParams_Prop } from "../../types/admin_products.types";
// import { Product_searchParams_Prop } from "../types/admin_products.types";

export default async function page({ searchParams } : Product_searchParams_Prop ) {
  const page = Number((await searchParams).page) || 0;
  await connected()
          // const page = Number(req.nextUrl.searchParams.get("page")) || 0
          
          // const getProducts = async () => {
            const res = await Products.find().sort({ _id: -1 }).skip(page * 6).limit(6)
            const productCount = await Products.countDocuments()
    //         const res = await fetch(
    //           `${process.env.APP_URL}/api/admin/products?page=${page}`,
    // );
  //   const result = await res.json();
  //   return result;
  // };

  // const DbResult = await getProducts();
  // const allProducts = DbResult.res;
  // const totalProduct = DbResult.productCount;
  const allProducts = res;
  const totalProduct = productCount;

  return (
    <div className="px-2 sm:px-8 py-4 bg-(--gray) flex-1 flex flex-col gap-5">
      <h2 className="text-2xl font-medium tracking-wider">
        Product Management
      </h2>
      <div className="flex flex-col gap-2">
        <Products_btns />

        <div className="bg-white border border-gray-400/60 flex sm:flex-col flex-row rounded-md ">
          <Products_header />
          <Products_list
            allProducts={allProducts}
            totalProduct={totalProduct}
            currentPage={page}
          />
        </div>
      </div>
    </div>
  );
}
