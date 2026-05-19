"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Products } from "../../types/product.types";
import { removeFromCart, updateQty } from "../../features/cart/cartSlice";
import DisplayCartItems from "./DisplayCartItems";
import TotalPrice from "./TotalPrice";

export default function CartComponents() {
  const allCarts = useAppSelector((state) => state.cartReducer.allCarts);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useAppDispatch();
  const [price, setPrice] = useState(0);
  const [taxs, setTaxs] = useState(0);

  const PriceFormat = (value: number) => {
    return new Intl.NumberFormat("En-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };


  //{cartData}

  useEffect(() => {
    // cartData(allCarts)
    const cartData = async () => {
      if (allCarts.length > 0) {
        const allCartsIds = allCarts.map((item) => item.id);
        const res = await axios.post("/api/cart", { allCarts: allCartsIds });
        if (res.data.allCarts) {
          setCartItems(res.data.allCarts);
        }
      }
    };
 
    const emptyCartData = () => {
      setCartItems([]);
      setPrice(0);
      setTaxs(0);
    };

    if (allCarts.length > 0) {
      cartData();

    } else {
      emptyCartData();
    }
  }, [allCarts]);

  useEffect(() => {
    const calculatePrice = () => {
      let calculatePrice = 0;
      cartItems?.forEach((item: Products) => {
        allCarts.forEach((data) => {
          if (data.id == item._id) calculatePrice += data.qty * item.price;
        });
      });
      if (calculatePrice > 0) {
        const tax = Math.ceil(calculatePrice * 0.18);
        setPrice(calculatePrice);
        setTaxs(tax);
      }
    };
    calculatePrice();
  }, [cartItems]);

  const handleQuantity = (id: string, stock: number, status: string) => {
    if (stock > 1) {
      dispatch(updateQty({ status: status, id: id }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart({ id: id }));
  };
  return (
    <>
      <div className="my-8">
        <span className="text-2xl font-medium tracking-wider">
          Shopping Cart
        </span>
        <span className="text-gray-500/90">({allCarts.length} items)</span>
      </div>
      <div className="flex gap-10  overflow-y-scroll h-[75vh] hide-scrollbar ">
        <DisplayCartItems
          handleQuantity={handleQuantity}
          handleRemove={handleRemove}
          cartItems={cartItems}
          allCarts={allCarts}
          PriceFormat={PriceFormat}
        />

        <TotalPrice PriceFormat={PriceFormat} price={price} taxs={taxs} />
      </div>
    </>
  );
}
