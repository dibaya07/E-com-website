"use client";
import Image from "next/image";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useAppSelector } from "@/lib/hook";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ProductListProp, Products } from "../../types/product.types";
import { setCarts } from "../../features/cart/cartSlice";
// import Pagination from "./Pagination";
// import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
// import { setProducts } from "../../features/product/productSlice";
 
export default function ProductList({ allListedProducts } : ProductListProp) {
  const allCarts = useAppSelector((state) => state.cartReducer.allCarts);
  const dispatch = useDispatch();
  const router = useRouter();
  const [totalProduct, setTotalProduct] = useState(0);
  const [allProducts, setAllProducts] = useState<Products[]>([])
  // const [page, setPage] = useState<number>(0)
  // const allProducts = useAppSelector(
  //   (state) => state.productReducer.allProducts,
  // );
  // const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      // const res = await axios.get(`/api/products?page=${page}`);
      if (totalProduct == 0) {
        setTotalProduct(allListedProducts.productCount);
      }
      setAllProducts(allListedProducts.allProducts);
    } catch (error) {
      console.log("productlist error", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   console.log(allProducts)
  // }, [allProducts])
  

  useEffect(() => {
    getAllProducts();
  }, [allListedProducts.allProducts]);

  const productHandler = (id: string) => {
    router.push(`/products/${id}`);
  };

  const handleAdd = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string,
    isInCart: boolean,
  ) => {
    e.stopPropagation();
    if (isInCart) {
      router.push(`/cart`);
    } else {
      // const cartsData =
      dispatch(setCarts([...allCarts, { id: id, qty: 1 }]));
    }
  };

  if (loading) return <div>loading...</div>;

  const handleShare = (item : Products)=> {
  if (navigator.share) {
    navigator.share({
      title: item.title,
      text: item.description,
      url: window.location.href,
    });
  } else {
    alert("Sharing is not supported on this device.");
  }
}

const copyItem = (e : React.MouseEvent<HTMLButtonElement>)=>{
  e.stopPropagation();
  navigator.clipboard.writeText(window.location.href);
alert("Product link copied!");
}

  return (
    <>
      <div className="flex flex-wrap justify-start gap-x-2 sm:gap-x-16 lg:gap-x-10 xl:gap-x-16 gap-y-6 ">
        {!loading &&
          allProducts.length > 0 &&
          allProducts.map((item: Products) => {
            const isInCart = allCarts.map((data) => data.id).includes(item._id);
            // console.log(item)
            return (
              <div
                className="flex flex-col bg-white w-[48%] md:w-[43%] lg:w-[29%] cursor-pointer  sm:gap-1.5 p-4 rounded-xl relative sm:static"
                key={item._id}
                onClick={() => productHandler(item._id)}
              >
                <span className=" flex justify-center items-center sm:relative">
                  <span className="absolute top-0.5 right-0.5 bg-blue-200/40 sm:bg-blue-200/20 p-2 rounded-full text-xs sm:text-sm">
                    <FaRegHeart />
                  </span>
                   {item.images.length > 0 ? (
                    // item.images.map((img,index) => (
                      <Image
                        // key={index}
                        src={item.images[0]}
                        alt="Product img"
                        width={100}
                        height={100}
                        className="rounded-md size-24 sm:size-50 border-black border bg-cover"
                      />
                    // ))
                  ) : (
                    <Image
                      src="/productImg.jpeg"
                      alt="Product img"
                      width={100}
                      height={100}
                      className="rounded-md size-24 sm:size-50"
                    />
                  )}
                  {/* <Image
                    src="/productImg.jpeg"
                    alt="product image"
                    width={150}
                    height={100}
                  /> */}
                </span>
                <span className=" hidden sm:block text-sm text-black/60">{item.brand}</span>
                <span className="text-sm sm:text-lg font-medium line-clamp-2">{item.title}</span>
                <span className="text-xs sm:text-base text-black/60">rating</span>
                {/* Share button and copy button */}
                <button onClick={() => handleShare(item)}>
                  Share
                </button>
                <button onClick={copyItem} className="cursor-pointer">
                  Copy
                </button>
                
                <div className="flex justify-between flex-1 items-end">
                  <div className="flex flex-col  ">
                    <span className="font-medium text-sm sm:text-lg">
                      &#8377;{item.price}
                    </span>
                    <span className="line-through text-black/60 text-[10px] sm:text-xs">
                      &#8377;{item.price}
                    </span>
                  </div>
                  <button
                    className={`flex justify-center items-center text-(--blue) px-3 py-1.5 sm:py-1 rounded-sm sm:rounded-xl  gap-2 bg-blue-200/30 ${isInCart && " border-2 border-blue-800"}`}
                    onClick={(e) => handleAdd(e, item._id, isInCart)}
                  >
                    
                    {!isInCart ? <MdOutlineAddShoppingCart /> : <BsFillCartCheckFill className="block sm:hidden"/>}
                    <p className="hidden sm:block ">{isInCart ? "Go to cart" : "Add"}</p>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

{/* <Pagination/> */}
// handlePagination={handlePagination} page={page} totalProduct={totalProduct}

// import { setCarts } from "@/app/features/cart/cartSlice";
// import { productListProp, Products } from "@/app/types/product.types";
//{ allProducts, loading} : productListProp
