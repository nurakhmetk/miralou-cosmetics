import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Product = ({ productInfo }) => {
  const product = productInfo.attributes;
  const imageLink = productInfo.attributes.MainImage.data.attributes.url;
  return (
    <div className='h-[400px] flex flex-col justify-between items-center my-7 '>
      <div className='w-full h-6 flex justify-end'>
        {product.OldPrice > 0 && (
          <span className='w-20 h-full text-center bg-black text-white font-poppinsSemiBold text-base'>
            sale
          </span>
        )}
      </div>
      <Link
        href={`shop/${product.category.data.attributes.name
          .replace(' ', '-')
          .toLowerCase()}/${productInfo.id}`}
        draggable='false'
      >
        <a draggable='false'>
          <Image
            src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${imageLink}`}
            layout='fixed'
            width={268}
            height={280}
            className='cursor-pointer'
            draggable='false'
          ></Image>
        </a>
      </Link>
      <div className='w-[270px] flex justify-between items-center p-5 bg-[#FAFAFA]'>
        <div className='w-3/4 flex flex-col space-y-1'>
          <h5 className='font-poppinsSemiBold text-base'>
            <Link
              href={`shop/${product.category.data.attributes.name
                .replace(' ', '-')
                .toLowerCase()}/${productInfo.id}`}
            >
              <a>{product.Name.toLowerCase()}</a>
            </Link>
          </h5>

          <h6 className='font-poppinsRegular text-xs text-[#949494]'>
            {product.category.data.attributes.name.toLowerCase()}
          </h6>
        </div>
        <div className='w-1/3 h-full flex space-x-2 pt-1 justify-end flex-wrap-reverse'>
          {product.OldPrice > 0 && (
            <span className='font-poppinsRegular text-xs text-[#EF2853]'>
              ${product.CurrentPrice}
            </span>
          )}
          <span
            className={
              product.OldPrice > 0
                ? 'font-poppinsRegular line-through text-xs text-[#949494]'
                : 'font-poppinsRegular text-xs text-[#949494]'
            }
          >
            {product.OldPrice > 0
              ? `$${product.OldPrice}`
              : `$${product.CurrentPrice}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
