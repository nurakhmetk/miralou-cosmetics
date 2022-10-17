import React from 'react';
import ArrowIcon from '../asset/icons/arrow-down.svg';
import ActionButton from './shared/ActionButton';

const MainPage = ({ imagePath }) => {
  return (
    <div
      className='h-screen text-2xl -mt-24'
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_DATABASE_URL}${imagePath})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='max-w-[73.125rem] m-auto w-full h-full flex flex-col justify-center items-center'>
        <div className='w-full h-1/2 flex justify-between items-center'>
          <div className='w-2/5 flex items-center space-x-1'>
            <span className='w-[3px] h-8 bg-black'></span>
            <span className='font-poppinsSemiBold text-3xl'>03</span>
          </div>
          <div className='flex flex-col justify-center space-y-2 h-full items-end'>
            <h1 className='font-poppinsBold text-5xl mb-7'>
              shop with comfort
            </h1>
            <span className='w-24 h-2 bg-black mb-10'></span>
            <div>
              <p className='text-right max-w-md font-poppinsRegular text-sm text-[#949494] mt-4 mb-14 break-words'>
                The best perfumes you wish to buy online. It’s the matter of
                couple of clicks.
              </p>
            </div>
            <ActionButton />
          </div>
          <div className='flex items-center space-x-1'>
            <span className='font-poppinsSemiBold text-3xl'>02</span>
            <span className='w-[3px] h-8 bg-black'></span>
          </div>
        </div>
        <div className='animate-bounce h-6'>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
