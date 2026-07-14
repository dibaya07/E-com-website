"use client";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

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
      <button className="sm:hidden" onClick={handleClick}>
        <GiHamburgerMenu size={23} />
      </button>
      {isMenuOpen && (
        <div>
          <div
            className="bg-black/60 inset-0 z-40 fixed"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="sm:hidden bg-black/70 fixed h-screen left-0 top-0 w-[90%] p-8 z-50">
            <button className=" w-full flex justify-end " onClick={handleClick}>
              <ImCross
                size={43}
                className="p-3 bg-[#0218a1] text-white rounded-lg"
              />
            </button>
            <ul className="flex flex-col gap-2.5 mt-4 text-white">
              <li className="bg-white/80 text-black px-2 py-1 rounded-md hover:bg-white hover:text-blue-700">
               Home
              </li>
              <li className="bg-white/80 text-black px-2 py-1 rounded-md hover:bg-white hover:text-blue-700">
                home
              </li>
              <li className="bg-white/80 text-black px-2 py-1 rounded-md hover:bg-white hover:text-blue-700">
                home
              </li>
              {/* <li>home</li> */}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}
