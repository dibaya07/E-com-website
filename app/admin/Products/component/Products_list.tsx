import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Product, product_detailsProp } from "../../types/admin_products.types";
import Pagination from "../../components/Pagination";

export default function Products_details({ allProducts ,totalProduct, currentPage} :  product_detailsProp) {

  return (
    <>
      <ul className="flex  flex-col border-t border-gray-400/60 h-[56vh] overflow-hidden">
        {allProducts?.length > 0 &&
          allProducts?.map((item: Product) => {
            return (
              <li
                className="hover:bg-blue-200/30 flex gap-5 px-3  py-2 items-center justify-between border-b border-gray-400/60"
                key={item._id}
              >
                <input type="checkbox" />
                <span className="flex gap-1.5 w-[20%]  overflow-hidden justify-start items-center">
                  <Image
                    src={"/productImg.jpeg"}
                    alt="Product img"
                    width={40}
                    height={10}
                    className="rounded-md"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm  whitespace-nowrap  text-ellipsis overflow-hidden w-[53%]">
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-500 pl-0.5">
                      {item.brand}
                    </span>
                  </span>
                </span>
                <span className="w-[10%] text-start">{item.category}</span>
                <span className="w-[10%] text-start">{item.price}</span>
                <span className="w-[10%] text-start">{item.stock}</span>
                <span className="w-[10%] text-start">status</span>
                <span className="flex gap-3 justify-center items-center text-xl w-[10%]">
                  <span className="hover:bg-blue-200 hover:text-blue-600 p-1 rounded-md">
                    <MdEdit />
                  </span>
                  <span className="hover:bg-red-200 hover:text-red-600 p-1 rounded-md">
                    <MdDelete />
                  </span>
                </span>
              </li>
            );
          })}
      </ul>

      <Pagination
        totalProduct={totalProduct}
        currentPage= {currentPage}
      />
    </>
  );
}
