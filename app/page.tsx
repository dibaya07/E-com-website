// import Image from "next/image";

import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SubFooter from "./components/SubFooter";
import Subscribe from "./components/Subscribe";
import Products from "./products/page";

export default function Home() {
  return (
   <div className="bg-blue-500">
    <Navbar/>
    <Banner/>
    <Category/>
    <BestSeller/>
    <Subscribe/>
    <Footer/>
    <SubFooter/>
    <Products/>
   </div>
  );
}
