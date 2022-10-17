import React, { useState } from 'react';

const BrandsList = ({ brands }) => {
  const initialBrands = brands.map((brand) => ({
    ...brand,
    isActive: false,
  }));
  const [brandsList, setBrandsList] = useState(initialBrands);

  const handleBrandSelect = (id) => {
    const newList = brandsList.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isActive: !item.isActive,
        };

        return updatedItem;
      }

      return item;
    });

    setBrandsList(newList);
  };
  return (
    <>
      {brandsList && (
        <ul className='flex flex-col space-y-3'>
          {brandsList.map((brand) => (
            <li
              key={brand.id}
              className={
                brand.isActive
                  ? 'font-poppinsRegular text-xs text-[#EF2853]'
                  : 'font-poppinsRegular text-xs text-[#949494]'
              }
            >
              {brand.brandName} <span>({brand.quantity})</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoriesList;
