import Add_product from "./components/Add_product";
import DashBoard from "./components/DashBoard";
import Product_management from "./components/Product_management";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className=" flex bg-white">
      {/* <div> */}
        <Sidebar />
      {/* </div> */}
      {/* <div>   */}
        <DashBoard />
        {/* <Product_management/> */}
        {/* <Add_product/> */}
      {/* </div> */}
    </div>
  );
}
