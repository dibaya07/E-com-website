import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { IoMdAnalytics } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import "./style.css"



export default function Sidebar() {
  return (
    <div className="sidebar flex flex-col gap-2 w-[15%] border-r border-(--gray) h-[93vh]">
      {/* <div className="flex flex-col "> */}
        {/* <span className="flex justify-start items-center gap-1 px-2 py-2 text-md hover:bg-blue-200/40 hover:text-(--blue) font-medium mx-2 rounded-md"> */}
        <span className="sidebar_btns">
          <span className="text-lg">
            <TbLayoutDashboardFilled />
          </span>
          <span>Dashboard</span>
        </span>
        <span className=" sidebar_btns">
          <span className="text-lg">
            <FaHeadphones />
          </span>
          <span>Products</span>
        </span>
        <span className=" sidebar_btns">
          <span className="text-lg">
            <FaShoppingCart />
          </span>
          <span>Orders</span>
        </span>
        <span className="sidebar_btns">
          <span className="text-lg">
            <IoPeople />
          </span>
          <span>Customers</span>
        </span>
        <span className=" sidebar_btns">
          <span className="text-lg">
            <IoMdAnalytics />
          </span>
          <span>Analytics</span>
        </span>
        <span className="  px-2 py-2 text-xs mx-2" >
          SETTINGS
        </span>
        <span className=" sidebar_btns">
          <span className="text-lg">
            <IoIosSettings />
          </span>
          <span>General Settings</span>
        </span>
        <span className="sidebar_btns">
          <span className="text-lg">
            <MdOutlineSecurity />
          </span>
          <span>Security</span>
        </span>
       
      </div>
    // </div>
  );
}
