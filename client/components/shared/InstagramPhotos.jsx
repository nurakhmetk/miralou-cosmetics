import React from 'react';

const InstagramPhotos = ({ instaPhotos }) => {
  return (
    <div className='max-w-[73.125rem] w-full m-auto flex flex-col'>
      <h2 className='font-poppinsSemiBold text-3xl mb-3'>
        follow us on Instagram
      </h2>
      <a
        href='https://www.instagram.com/miralou/'
        target='_blank'
        rel='noopener noreferrer'
        className='font-poppinsSemiBold text-sm text-[#EF2853] mb-9'
      >
        @miralou
      </a>
      <div className='w-full h-64 flex gap-7 justify-between'>
        {instaPhotos &&
          instaPhotos.map((photo) => (
            <img
              key={photo.id}
              src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${photo.attributes.url}`}
              draggable='false'
            />
          ))}
      </div>
    </div>
  );
};

export default InstagramPhotos;
