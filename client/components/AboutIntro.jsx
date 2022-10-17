import React from 'react';
import ActionButton from './shared/ActionButton';

const AboutIntro = ({ introductionData }) => {
  return (
    <div className='w-full h-[350px] flex gap-7'>
      <img
        className='w-1/2 h-full'
        src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${introductionData.picture.data.attributes.url}`}
        draggable='false'
      />
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <h3 className='font-poppinsSemiBold text-3xl w-14 break-after-avoid'>
          {introductionData.title}
        </h3>
        <p className='font-poppinsRegular text-sm'>
          {introductionData.content}
        </p>
        <ActionButton />
      </div>
    </div>
  );
};

export default AboutIntro;
