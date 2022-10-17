import Link from "next/link";
import React from "react";
import { capitalizeFirstLetters } from "../../utils/services";

const Breadcrumb = ({
  category,
  brand,
  productTitle,
  productHref,
  navigateHandler,
}) => {
  return (
    <div className="w-full h-24 bg-[#FAFAFA] flex">
      <div className="max-w-[73.125rem] mx-auto w-full self-center">
        <Link href="/">
          <a className="font-poppinsRegular text-sm">Home</a>
        </Link>
        <span className="mx-[2px] font-poppinsRegular text-sm">/</span>
        <Link href="/shop">
          <a className="font-poppinsRegular text-sm">Shop</a>
        </Link>
        {category && (
          <>
            <span className="mx-[2px] font-poppinsRegular text-sm">/</span>
            <Link href={`/shop`}>
              <a className="font-poppinsRegular text-sm">
                {capitalizeFirstLetters(
                  category.includes("-")
                    ? category.replace("-", " ")
                    : category,
                  false
                )}
              </a>
            </Link>
          </>
        )}
        {brand && (
          <>
            <span className="mx-[2px] font-poppinsRegular text-sm">/</span>
            <Link href="/shop">
              <a className="font-poppinsRegular text-sm">{brand}</a>
            </Link>
          </>
        )}
        {productTitle && (
          <>
            <span className="mx-[2px] font-poppinsRegular text-sm">/</span>
            <Link href={`/shop/${category}/${productHref}`}>
              <a className="font-poppinsRegular text-sm">
                {capitalizeFirstLetters(productTitle)}
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
