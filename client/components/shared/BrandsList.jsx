import React from 'react';

const BrandsList = ({ brands, selectedBrand, setSelectedBrand }) => {
  const handleBrandSelect = (brandName) => {
    setSelectedBrand(brandName);
    if (brandName === selectedBrand) {
      setSelectedBrand('');
    }
  };

  return (
    <>
      {brands && (
        <ul className='flex flex-col space-y-3'>
          {brands.map((brand) => (
            <li
              key={brand.id}
              className={
                selectedBrand === brand.attributes.name
                  ? 'font-poppinsRegular text-xs text-[#EF2853]'
                  : 'font-poppinsRegular text-xs text-[#949494]'
              }
            >
              <button onClick={() => handleBrandSelect(brand.attributes.name)}>
                {brand.attributes.name}{' '}
                <span>({brand.attributes.products.data.length})</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BrandsList;
