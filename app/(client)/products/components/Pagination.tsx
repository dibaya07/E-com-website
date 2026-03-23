import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { paginationProp } from "../../types/product.types";

export default function Pagination({
  handlePagination,
  page,
  totalProduct,
}: paginationProp) {
  return (
    <div className=" flex justify-between">
      <button
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
      </button>
    </div>
  );
}
