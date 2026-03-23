import Banner from "./components/home/Banner";
import BestSeller from "./components/home/BestSeller";
import Category from "./components/home/Category";
import Subscribe from "./components/Subscribe";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-(--gray) py-2 px-5">
        <Banner />
        <Category />
        <BestSeller />
        <Subscribe />
      </div>
    </div>
  );
}
