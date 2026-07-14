"use client";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Sidebar from "./Sidebar";

export default function MenuBtn() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <button className="sm:hidden pl-1.5" onClick={handleClick}>
        <GiHamburgerMenu size={23} />
      </button>
      {isMenuOpen && (
        <div>
          <div
            className="bg-black/60 inset-0 z-40 fixed"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="sm:hidden bg-black/70 fixed h-screen left-0 top-0 w-[90%] p-8 z-50 overflow-hidden">
            <button className=" w-full flex justify-end " onClick={handleClick}>
              <ImCross
                size={43}
                className="p-3 bg-[#0218a1] text-white rounded-lg"
              />
            </button>
            <span onClick={handleClick}>
            <Sidebar/>
            </span>
          </aside>
        </div>
      )}
    </>
  );
}
