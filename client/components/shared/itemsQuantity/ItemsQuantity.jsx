import React from 'react';
import { useStateContext } from '../../../context/StateContext';
import ArrowIcon from '../../../asset/icons/arrow-gray.svg';

const ItemsQuantity = ({ decreaseQuantity, increaseQuantity, qty }) => {
  return (
    <div className='w-24 h-10 p-2 flex justify-between items-center border border-[#949494]'>
      <button onClick={decreaseQuantity}>
        <ArrowIcon />
      </button>
      <span className='font-poppinsSemiBold text-xl'>{qty}</span>
      <button onClick={increaseQuantity}>
        <ArrowIcon className='rotate-180' />
      </button>
    </div>
  );
};

export default ItemsQuantity;
