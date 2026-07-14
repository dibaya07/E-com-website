import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";


export default function SearchBar() {
  return (
      <div className="searchBar sm:bg-(--gray) hidden sm:flex justify-between sm:flex-1 sm:p-2 rounded-full sm:mx-2">
        <span className="  flex justify-center items-center mx-1.5 ">
          <IoSearch />
        </span>
        <input
          type="text"
          placeholder="Search for products, Brands and more.."
          className="flex-1 hidden sm:flex"
        />
        <button className="bg-(--blue) hidden sm:flex justify-center items-center text-white rounded-full p-2">
          <FaArrowRight />
        </button>
      </div> 
  )
}
