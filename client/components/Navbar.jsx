import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ActiveLink from "./shared/ActiveLink";
import MiralouLogo from "../asset/logo/miralou-logo.svg";
import SearchIcon from "../asset/icons/search.svg";
import FavouriteIcon from "../asset/icons/favourite.svg";
import CartIcon from "../asset/icons/cart.svg";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(true);
  const [inputText, setInputText] = useState("");
  const [favouriteActive, setFavouriteActive] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const handleClickSearch = () => {
    setSearchActive(!searchActive);
  };

  const handleInput = (ev) => {
    setInputText(ev.target.value);
    console.log(inputText);
  };

  return (
    <nav className="max-w-[73.125rem] h-24 m-auto w-full flex justify-between items-center z-10">
      <Link href="/">
        <a className="cursor-pointer">
          <MiralouLogo />
        </a>
      </Link>
      {searchActive && (
        <div className="flex items-center space-x-8">
          <ActiveLink href={"/"} buttonLabel="Home" />
          <ActiveLink href={"/shop"} buttonLabel="Shop" />
          <ActiveLink href={"/product"} buttonLabel="Product" />
          <ActiveLink href={"/blog"} buttonLabel="Blog" />
          <ActiveLink href={"/page"} buttonLabel="Page" />
        </div>
      )}

      <div
        className={
          searchActive
            ? "flex items-center space-x-6"
            : "w-2/3 flex items-center space-x-6"
        }
      >
        {!searchActive && (
          <div className="w-full flex justify-end relative">
            <input
              onChange={handleInput}
              value={inputText}
              type="text"
              placeholder="Search"
              className="w-full placeholder:text-black text-sm placeholder:leading-6 placeholder:font-poppinsSemiBold font-poppinsRegular focus:outline-none border-b-black border-b-[1px] pt-4 pb-2 bg-transparent"
            />
            <button
              className="border-b-black border-b-[1px]"
              onClick={handleClickSearch}
            >
              <SearchIcon />
            </button>
          </div>
        )}
        {searchActive && (
          <button onClick={handleClickSearch}>
            <SearchIcon />
          </button>
        )}
        <Link className="relative" href="/wishlist">
          <a>
            <FavouriteIcon />
            {favouriteActive && (
              <span className="absolute right-0 top-0 bg-[#EF2853] w-2 h-2 rounded-[50%]"></span>
            )}
          </a>
        </Link>
        <Link className="relative" href="/cart">
          <a className="relative">
            <CartIcon />
            {totalQuantities > 0 && (
              <span className="absolute right-0 top-0 bg-[#EF2853] w-2 h-2 rounded-[50%]"></span>
            )}
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
