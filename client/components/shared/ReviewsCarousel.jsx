import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';

const ReviewsCarousel = ({ reviews }) => {
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
        {reviews &&
          reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className='flex-auto flex flex-col items-center space-y-5'>
                <p className='w-2/3 font-poppinsRegular text-sm text-[#949494] text-center'>
                  {review.attributes.content}
                </p>
                <h5 className='font-poppinsSemiBold text-xl'>
                  {review.attributes.author}
                </h5>
                <span className='font-poppinsRegular text-sm text-[#949494]'>
                  {review.attributes.position}
                </span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ReviewsCarousel;
