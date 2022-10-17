import React from 'react';
import ArrowIcon from '../../asset/icons/arrow-gray.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';

const Test = () => {
  const reviews = {
    title: 'they say',
    content:
      'Eu dolor at venenatis aliquam velit et in consequat. Nam dui pulvinar consequat eleifend malesuada. Eu dolor at venenatis aliquam velit et in consequat. Nam dui pulvinar consequat eleifend malesuada. Eu dolor at venenatis aliquam velit et in consequat. Nam dui pulvinar consequat eleifend malesuada.  ',
    author: 'Jenny Wilson',
    authorsPosition: 'Co Founder',
  };
  return (
    <div className='w-full py-14 bg-[#FAFAFA] '>
      <h2 className='text-center font-poppinsSemiBold text-3xl mb-10'>
        they say
      </h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className='max-w-[73.125rem] m-auto flex justify-between items-center relative'
      >
        <SwiperSlide>
          <div className='flex-auto flex flex-col items-center space-y-7'>
            <p className='w-2/3 font-poppinsRegular text-sm text-[#949494] text-center'>
              {reviews.content}
            </p>
            <h5 className='font-poppinsSemiBold text-xl'>{reviews.author}</h5>
            <span className='font-poppinsRegular text-sm text-[#949494]'>
              {reviews.authorsPosition}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' flex-auto flex flex-col items-center space-y-7'>
            <p className='w-2/3 font-poppinsRegular text-sm text-[#949494] text-center'>
              {reviews.content}
            </p>
            <h5 className=' font-poppinsSemiBold text-xl'>{reviews.author}</h5>
            <span className='font-poppinsRegular text-sm text-[#949494]'>
              {reviews.authorsPosition}
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Test;
