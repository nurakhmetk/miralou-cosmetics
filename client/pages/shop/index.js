import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/shared/Breadcrumb";
import ProductsLists from "../../components/shared/ProductsLists";
import CategoriesList from "../../components/shared/CategoriesList";
import BrandsList from "../../components/shared/BrandsList";
import { useRouter } from "next/router";
import { sortingProducts } from "../../utils/services";

const Shop = ({ products, categories, brands }) => {
  const [productsList, setProductsList] = useState([]);
  const [sortingDropdown, setSortingDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const ref = useRef();

  const sortingOptions = [
    { name: "Name", id: 1 },
    { name: "Price High to Low", id: 2 },
    { name: "Price Low to High", id: 3 },
    { name: "Newest", id: 4 },
    { name: "Oldest", id: 5 },
  ];

  useEffect(() => {
    setProductsList(products);
    const checkIfClickedOutside = (e) => {
      if (sortingDropdown && ref.current && !ref.current.contains(e.target)) {
        setSortingDropdown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [sortingDropdown]);

  const handleSorting = () => {
    setSortingDropdown(!sortingDropdown);
  };

  return (
    <Layout title={"Shop | Miralou Cosmetics"} keywords={"blog"}>
      <Breadcrumb category={selectedCategory} brand={selectedBrand} />
      <div className="h-full max-w-[73.125rem] m-auto flex pt-10 pb-24">
        <div className="w-1/4 flex flex-col justify-start space-y-5">
          <div className="flex flex-col">
            <h2 className="font-poppinsSemiBold text-xl mb-5">categories</h2>
            <CategoriesList
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="font-poppinsSemiBold text-xl mb-5">brands</h2>
            <BrandsList
              brands={brands}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
            />
          </div>
        </div>
        <div className=" h-full flex flex-col relative">
          <button
            className="self-end w-44 border border-[#949494] pl-3 py-1 flex items-center relative"
            onClick={handleSorting}
          >
            <span className="font-poppinsRegular text-xs text-[#949494]">
              sort by
            </span>
            <div
              className={
                sortingDropdown
                  ? "arrow !rotate-90 !top-[1.15rem] !right-4"
                  : "arrow "
              }
            >
              <span className="arrow-top"></span>
              <span className="arrow-bottom"></span>
            </div>
          </button>
          {sortingDropdown ? (
            <div
              className="absolute w-44 bg-gray-100 border border-[#949494] right-0 top-10 z-10"
              ref={ref}
            >
              <ul className="w-full h-full flex flex-col justify-between">
                {sortingOptions &&
                  sortingOptions.map((option) => (
                    <li
                      className="w-full pl-3 py-1 font-poppinsRegular border-b-2 text-xs cursor-pointer hover:underline"
                      key={option.id}
                      onClick={() => sortingProducts(products, option.name)}
                    >
                      {option.name}
                    </li>
                  ))}
              </ul>
            </div>
          ) : null}
          <ProductsLists
            products={productsList}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Shop;

export async function getServerSideProps() {
  const productsRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/products?populate=*`
  );
  const categoriesRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/categories?populate=*`
  );
  const brandsRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/brands?populate=*`
  );
  const productsData = await productsRes.json();
  const categoriesData = await categoriesRes.json();
  const brandsData = await brandsRes.json();

  const products = await productsData.data;
  const categories = await categoriesData.data;
  const brands = await brandsData.data;
  return {
    props: { products, categories, brands },
  };
}
