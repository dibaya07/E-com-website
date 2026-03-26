import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";

export default function DashBoard() {
  return (
    <div className="flex flex-col bg-(--gray) flex-1 px-8 py-4">
      <div className="flex flex-col gap-1 mb-2">
        <span className="text-2xl font-medium tracking-wide">
          Dashboard Overview
        </span>
        <span className="text-sm text-gray-600">
          Welcome back, here&apos;s what&apos;s happeing with your store today
        </span>
      </div>

      <div className="total_sales flex gap-3 my-6">
        <div className="bg-white flex gap-8 px-4 py-4 justify-start rounded-md">
          <div className="flex flex-col ">
            <span className="text-sm text-gray-800">Total sales</span>
            <span className="text-lg font-medium tracking-wider">84534</span>
            <span className={`text-xs mt-3`}>DATA</span>
          </div>
          <div className=" flex justify-center items-start">
            <span className="bg-blue-300/40 p-3 text-lg text-blue-600 rounded-lg">
              <FaRupeeSign />
            </span>
          </div>
        </div>

        <div className="bg-white flex gap-8 px-4 py-4 justify-start rounded-md">
          <div className="flex flex-col ">
            <span className="text-sm text-gray-800">Total sales</span>
            <span className="text-lg font-medium tracking-wider">84534</span>
            <span className={`text-xs mt-3`}>DATA</span>
          </div>
          <div className=" flex justify-center items-start">
            <span className="bg-blue-300/40 p-3 text-lg text-blue-600 rounded-lg">
              <FaRupeeSign />
            </span>
          </div>
        </div>
      </div>

      <div className="sales_overview flex gap-3">
        <div className="bg-white w-2/3 h-[60vh] flex flex-col gap-2 px-4 py-6 rounded-md">
          <div className=" flex justify-between items-center">
            <span className="font-medium">Sales overview</span>
            <span className="bg-gray-300/50 flex gap-2 p-1 justify-center items-center rounded-lg">
              <span className="bg-white px-3 py-1  text-black text-sm rounded-lg">
                7Days
              </span>
              <span className=" px-3 py-1  text-black text-sm rounded-lg">
                Month
              </span>
              <span className=" px-3 py-1  text-black text-sm rounded-lg">
                Year
              </span>
            </span>
          </div>
          <div className="bg-(--gray)  flex-1 rounded-md">
            <span>graph</span>
          </div>
        </div>
        <div className="bg-white flex-1 px-4 py-6 rounded-md">
          <div className="text-lg font-medium pb-4">Top Selling Products</div>


          <div className="flex flex-col gap-2 h-[47vh] overflow-y-scroll hide-scrollbar">

          <div className="flex justify-between ">
            <div className="flex gap-2 justify-center items-center flex-1">
              <Image
                src={"/productImg.jpeg"}
                alt="product img"
                width={40}
                height={10}
                className="rounded-md"
              />
              <div className=" flex flex-col flex-1 mr-1">
                <span>Title</span>
                <span className="text-sm pl-0.5">brand</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span>price</span>
              <span className="text-sm">sale count</span>
            </div>
          </div>

        


          </div>



        </div>
      </div>
      <div className="recent_orders mt-5 px-4 py-6 bg-white rounded-md">
        <div className=" py-2 text-lg font-medium">Recent orders</div>
        <div>
          <div className="text-sm bg-blue-300/20 flex justify-between py-3">
            <span>ORDER ID</span>
            <span>CUSTOMER</span>
            <span>PRODUCT</span>
            <span>DATE</span>
            <span>AMOUNT</span>
            <span>STATUS</span>
            <span>ACTION</span>
          </div>
          <div className="text-sm flex justify-between py-3">
            <span>product details</span>
            <span>product details</span>
            <span>product details</span>
            <span>product details</span>
            <span>product details</span>
            <span>product details</span>
            <span>product details</span>
          </div>

        </div>
      </div>
    </div>
  );
}
