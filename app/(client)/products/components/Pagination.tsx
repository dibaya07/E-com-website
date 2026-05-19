import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { paginationProp } from "../../types/product.types";
import Link from "next/link";

export default function Pagination({ page, totalProduct }: paginationProp) {
  return (
    <div className=" flex justify-between">
      <Link
        href={`/products?page=${page - 1}`}
        className={`bg-gray-300/50 px-4 py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-gray-300   ${page == 0 && "pointer-events-none opacity-50 hover:bg-gray-300/50 cursor-not-allowed"}`}
      >
        <MdKeyboardDoubleArrowLeft /> Prev
      </Link>
      <Link
        href={`/products?page=${page + 1}`}
        // onClick={() => handlePagination("next")}
        className={`bg-gray-300/50 px-4 py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-gray-300  ${page + 1 == Math.ceil(totalProduct / 6) && "pointer-events-none opacity-50 hover:bg-gray-300/50 cursor-not-allowed"}`}
      >
        Next <MdKeyboardDoubleArrowRight />
      </Link>
    </div>
  );
}

{
  /* <button
        onClick={() => handlePagination("prev")}
        disabled={page == 0}
        className="bg-gray-300/50 px-4 py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-gray-300/50 disabled:cursor-not-allowed "
      >
        <MdKeyboardDoubleArrowLeft /> Prev
      </button>
      <button
        onClick={() => handlePagination("next")}
        className="bg-gray-300/50 px-4 py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-gray-300/50 disabled:cursor-not-allowed"
        disabled={page + 1 == Math.ceil(totalProduct / 6)}
      >
        Next <MdKeyboardDoubleArrowRight />
      </button> */
}

//  const page = Number((await searchParams).page) || 0

// const handlePagination = (state : string)=>{
//   if(state == "next"){
//     setPage((prev)  => prev + 1)
//   }else{
//     setPage(prev=> prev - 1)
//   }
// }
