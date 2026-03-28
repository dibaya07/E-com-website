"use client";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { IoMdAnalytics } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import "./style.css";
import { nanoid } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const sidebar_options = [
    { icon: <TbLayoutDashboardFilled />, text: "Dashboard" },
    { icon: <FaHeadphones />, text: "Products" },
    { icon: <FaShoppingCart />, text: "Orders" },
    { icon: <IoPeople />, text: "Customers" },
    { icon: <IoMdAnalytics />, text: "Analytics" },
  ];
  const router = useRouter();

  const handle_sidebar_click = (text: string) => {
    // console.log('clicked')
    if (text == "Dashboard") {
      router.push(`/admin`);
    } else {
      router.push(`/admin/${text}`);
    }
  };

  return (
    <div className="sidebar flex flex-col gap-2 w-[17%] border-r border-(--gray) h-[93vh] py-3">
      {sidebar_options.map((item) => {
        return (
          <span
            className="sidebar_btns"
            key={nanoid()}
            onClick={() => handle_sidebar_click(item.text)}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="sidebar_btns_text">{item.text}</span>
          </span>
        );
      })}
      <span className="  px-2 py-2 text-xs mx-2">SETTINGS</span>
      <span
        className=" sidebar_btns"
        onClick={() => router.push("/admin/Settings")}
      >
        <span className="text-lg">
          <IoIosSettings />
        </span>
        <span className="sidebar_btns_text">General Settings</span>
      </span>
      <span className="sidebar_btns" onClick={() => router.push("/admin/Security")}>
        <span className="text-lg">
          <MdOutlineSecurity />
        </span>
        <span className="sidebar_btns_text">Security</span>
      </span>
    </div>
    // </div>
  );
}
