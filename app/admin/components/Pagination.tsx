import Link from "next/link";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { paginationProp } from "../types/admin_products.types";

export default function Pagination({
  totalProduct,
  currentPage,
}: paginationProp) {
  return (
    <div className=" flex justify-between px-3 py-3 bg-gray-300/20 text-sm">
      {currentPage == 0 ? (
        <span className="opacity-50 bg-gray-300/50 cursor-not-allowed px-4 py-2 rounded-lg flex justify-center items-center gap-1">
          <MdKeyboardDoubleArrowLeft /> Prev
        </span>
      ) : (
        <Link
          href={`/admin/Products?page=${currentPage - 1}`}
          className="bg-gray-300/50 px-4 py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-gray-300 "
        >
          <MdKeyboardDoubleArrowLeft /> Prev
        </Link>
      )}
      {currentPage + 1 == Math.ceil(totalProduct / 6) ? (
        <span className="bg-gray-300/50 px-4 py-2 rounded-lg flex justify-center items-center gap-1 opacity-50 cursor-not-allowed">
          {" "}
          Next <MdKeyboardDoubleArrowRight />
        </span>
      ) : (
        <Link
          href={`/admin/Products?page=${currentPage + 1}`}
          className="bg-gray-300/50 px-4 py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-gray-300 "
        >
          Next <MdKeyboardDoubleArrowRight />
        </Link>
      )}
    </div>
  );
}
