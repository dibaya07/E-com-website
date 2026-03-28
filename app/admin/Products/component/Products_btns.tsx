import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

export default function Products_btns() {
  return (
   <div className='flex gap-3 bg-white p-3 text-[15px] justify-between rounded-md'>
          <span className='bg-gray-400/20 border border-gray-400/60 p-1 flex gap-2 justify-start items-center w-2/5 rounded-md'>
              <IoMdSearch />
            <input type="text" placeholder='Search products' className="outline-0 flex-1 "/>
          </span>
          <span className="flex gap-8 px-2 flex-1 justify-end">
            <select className="border border-gray-400/60 rounded-md"> 
              <option value="All categories">Status : Any</option>
              <option value="All categories">Active</option>
              <option value="All categories">Draft</option>
              <option value="All categories">Low stock</option>
            </select>
            {/* <button>status</button> */}
            <button className="bg-blue-600/90 text-white px-2 py-1.5 flex gap-1.5 justify-center items-center rounded-md hover:bg-blue-600"><FaPlus />Add New Product</button> 
          </span>
        </div>
  )
}
