import { Products } from "@/models/product";
import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default async function ProductList() {
  console.log("calling this ");
  const allProducts = await Products.find();
  // const allProducts = await res.json()
  console.log(allProducts);

  return (
    <div>
      {allProducts.map((item) => {
        return (
          <div className="flex flex-col w-1/4 bg-blue-400" key={uuidv4()}> 
            {/* <span>img</span>
            <span>company</span> */}
            <span>{item.title}</span>
            {/* <span>rating</span>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>discounted price</span>
                <span>original price</span>
              </div>
              <button>add to cart</button>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}


