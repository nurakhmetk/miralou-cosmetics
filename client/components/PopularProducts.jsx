import React from "react";
import Product from "./shared/Product";

const PopularProducts = ({ products, productsQuantity }) => {
  return (
    <div className="w-full pt-10">
      <div className="w-full flex flex-col items-center space-y-4 mb-10">
        <h2 className="font-mrsSaintDel text-4xl text-[#EF2853]">
          Popular Products
        </h2>
        <h2 className="font-poppinsSemiBold text-3xl">best to buy</h2>
        <span className="w-24 h-1 bg-black"></span>
        <p className="text-center max-w-xl font-poppinsRegular text-sm text-[#949494] break-words">
          periculiser reex, nihil dexpetendis.
        </p>
      </div>
      <div className="w-full grid grid-flow-row grid-cols-3 auto-rows-auto gap-8">
        {products &&
          products
            .slice(0, 6)
            .map((product) => (
              <Product productInfo={product} key={product.id} />
            ))}
      </div>
    </div>
  );
};

export default PopularProducts;
