import React, { useRef, useState } from 'react';
import { useStateContext } from '../context/StateContext';
import ItemsQuantity from './shared/itemsQuantity/ItemsQuantity';
import IconX from '../asset/icons/x-icon.svg';
import ArrowIcon from '../asset/icons/arrow-gray.svg';
import Link from 'next/link';

const CartProducts = ({ cartItems, categories }) => {
  const {
    decreaseQuantity,
    increaseQuantity,
    qty,
    totalPrice,
    totalQuantities,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const cartRef = useRef();
  const [selectedShipping, setSelectedShipping] = useState('flat rate');
  //

  const shippingMethods = [
    { name: 'flat rate', id: 1 },
    { name: 'free shipping', id: 2 },
  ];

  const handleSelect = (methodName) => {
    if (selectedShipping !== methodName) {
      setSelectedShipping(methodName);
    }
  };

  return (
    <div
      className='max-w-[73.125rem] py-20 w-full h-full flex flex-col items-center space-y-9'
      ref={cartRef}
    >
      <div className='w-full flex'>
        <div className='w-2/3'>
          <span className='font-poppinsSemiBold text-3xl'>shopping cart</span>
          <ul className='w-full flex flex-col pr-24 pl-7 py-14 space-y-14'>
            {cartItems &&
              cartItems.map((item) => (
                <li
                  className='w-full flex justify-between items-center'
                  key={item.id}
                >
                  <span
                    onClick={() => onRemove(item)}
                    className='cursor-pointer'
                  >
                    <IconX />
                  </span>
                  <Link
                    href={`shop/${item.attributes.category.data.attributes.name
                      .replace(' ', '-')
                      .toLowerCase()}/${item.id}`}
                  >
                    <a>
                      <img
                        src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${item.attributes.MainImage.data.attributes.url}`}
                        alt=''
                        className='w-[70px] h-[75px] object-fill'
                      />
                    </a>
                  </Link>
                  <Link
                    href={`shop/${item.attributes.category.data.attributes.name
                      .replace(' ', '-')
                      .toLowerCase()}/${item.id}`}
                  >
                    <a>
                      <span className='font-poppinsSemiBold text-base hover:underline'>
                        {item.attributes.Name}
                      </span>
                    </a>
                  </Link>
                  <span className='font-poppinsRegular text-[#949494] text-[15px]'>
                    ${item.attributes.CurrentPrice}
                  </span>
                  <div className='w-24 h-10 p-2 flex justify-between items-center border border-[#949494]'>
                    <button
                      onClick={() => toggleCartItemQuantity(item.id, 'dec')}
                    >
                      <ArrowIcon />
                    </button>
                    <span className='font-poppinsSemiBold text-xl'>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => toggleCartItemQuantity(item.id, 'inc')}
                    >
                      <ArrowIcon className='rotate-180' />
                    </button>
                  </div>
                  <span className='font-poppinsRegular text-[#949494] text-[15px]'>
                    ${item.totalPrice}
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className='h-fit w-1/3 flex flex-col p-10 space-y-7 bg-[#f5f5f5]'>
          <span className='font-poppinsSemiBold text-3xl'>cart totals</span>
          <div className='w-full flex justify-between items-center'>
            <span className='font-semibold text-xl'>subtotal:</span>
            <span className='font-semibold text-xl'>${totalPrice}</span>
          </div>
          <ul className='w-full space-y-2'>
            <span className='font-semibold text-xl'>shipping:</span>
            {shippingMethods &&
              shippingMethods.map((method) => (
                <li
                  className='w-fit space-x-3 flex items-center cursor-pointer'
                  key={method.id}
                  onClick={() => handleSelect(method.name)}
                >
                  <span className='flex justify-center items-center w-[14px] h-[14px] border border-[#EF2853] rounded-full'>
                    {selectedShipping === method.name ? (
                      <span className='w-[12px] h-[12px] bg-[#EF2853] border border-white rounded-full'></span>
                    ) : null}
                  </span>
                  <span className='font-poppinsRegular text-xs'>
                    {method.name}
                  </span>
                </li>
              ))}
          </ul>
          <div className='w-full flex justify-between items-center'>
            <span className='font-semibold text-3xl'>total:</span>
            <span className='font-semibold text-3xl'>${totalPrice}</span>
          </div>
          <button className='w-full h-12 bg-black flex justify-center items-center'>
            <span className='font-poppinsBold text-xs text-white'>
              proceed to checkout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
