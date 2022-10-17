import React, { useMemo } from 'react';
import Product from './Product';
import { getFilteredList } from '../../utils/services';

const ProductsLists = ({ products, selectedCategory, selectedBrand }) => {
  const filteredProducts = useMemo(
    () => getFilteredList(products, selectedCategory, selectedBrand),
    [selectedCategory, selectedBrand, products]
  );

  return (
    <div className='w-full grid grid-flow-row grid-cols-3 auto-rows-auto gap-8'>
      {products &&
        filteredProducts.map((product) => (
          <Product productInfo={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductsLists;
