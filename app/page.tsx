// import Image from "next/image";

import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Subscribe from "./components/Subscribe";
// import Products from "./products/page";

export default function Home() {
  return (
   <div className="bg-white">
    {/* <Navbar/> */}
    <div className="bg-(--gray) py-2 px-5">
    <Banner/>
    <Category/>
    <BestSeller/>
    <Subscribe/>
    {/* <SubFooter/> */}
    {/* <Products/> */}
    </div>
    {/* <Footer/> */}
   </div>
  );
}
