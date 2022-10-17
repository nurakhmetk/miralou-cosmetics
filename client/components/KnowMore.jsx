import React from 'react';
import LearnMoreButton from './shared/LearnMoreButton';

const KnowMore = ({ knowMore }) => {
  return (
    <div className='w-full h-96 flex gap-7'>
      <div className='w-2/3 h-full flex gap-7'>
        <div className='w-1/4 h-full'>
          {knowMore.highPictures && (
            <img
              className='w-full h-full'
              src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${knowMore.highPictures.data[0].attributes.url}`}
              draggable='false'
            />
          )}
        </div>
        <div className='w-2/4 h-full flex flex-col gap-7'>
          {knowMore.smallPictures &&
            knowMore.smallPictures.data.map((picture) => (
              <img
                className='w-full h-full'
                src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${picture.attributes.url}`}
                key={picture.id}
                draggable='false'
              />
            ))}
        </div>
        <div className='w-1/4 h-full'>
          {knowMore.smallPictures && (
            <img
              className='w-full h-full'
              src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${knowMore.highPictures.data[1].attributes.url}`}
              draggable='false'
            />
          )}
        </div>
      </div>
      <div className='w-1/3 h-full flex flex-col items-start justify-between'>
        <h2 className='font-mrsSaintDel text-4xl text-[#EF2853] '>
          {knowMore.Super}
        </h2>
        <h2 className='font-poppinsSemiBold text-3xl -mb-3'>
          {knowMore.Title}
        </h2>
        <span className='block w-24 h-1 bg-black'></span>
        <p className='text-left max-w-xl font-poppinsRegular text-sm text-[#949494] break-words'>
          {knowMore.Content}
        </p>
        <LearnMoreButton />
      </div>
    </div>
  );
};

export default KnowMore;
