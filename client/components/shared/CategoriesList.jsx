import { useRouter } from "next/router";
import React, { useEffect } from "react";

const CategoriesList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const router = useRouter();
  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    if (categoryName === selectedCategory) {
      setSelectedCategory("");
    }
  };

  return (
    <>
      {categories && (
        <ul className="flex flex-col space-y-3">
          {categories.map((category) => (
            <li
              key={category.id}
      ``        className={
                selectedCategory === category.attributes.name
                  ? "font-poppinsRegular text-xs text-[#EF2853]"
                  : "font-poppinsRegular text-xs text-[#949494]"
              }
            >
              <button
                onClick={() => handleCategorySelect(category.attributes.name)}
              >
                {category.attributes.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoriesList;
