import React from 'react';

const Categories = ({ categories }) => {
  const menImagePath = categories.Men.data.attributes.url || '';
  const inspirationImagePath = categories.Inspiration.data.attributes.url || '';
  const womenImagePath = categories.Women.data.attributes.url || '';
  const otherImagePath = categories.Other.data.attributes.url || '';

  return (
    <div className='w-full flex flex-col mb-12'>
      <div className='w-full h-[450px] flex justify-between gap-7'>
        <div
          className='w-1/2 relative'
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_DATABASE_URL}${menImagePath})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <span className='w-48 h-12 mt-10 bg-black flex justify-center items-center z-10 text-white font-poppinsSemiBold text-sm'>
            for men
          </span>
        </div>
        <div className='w-1/2 flex flex-col space-y-7'>
          <div className='w-full flex gap-7'>
            <div
              className='w-1/2 h-52'
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_DATABASE_URL}${inspirationImagePath})`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div
              className='w-1/2 h-52'
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_DATABASE_URL}${womenImagePath})`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </div>
          <div
            className='w-full h-52 flex flex-col items-center pt-10'
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_DATABASE_URL}${otherImagePath})`,
              backgroundRepeat: 'no-repeat',
            }}
          >
            <p className='leading-[100px] font-mrsSaintDel text-[105px] text-white'>
              Collection
            </p>
            <h6 className='font-poppinsSemiBold text-xl text-white'>
              ready to shop with us
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
