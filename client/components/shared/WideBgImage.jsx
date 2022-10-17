import React from 'react';

const WideBgImage = ({ children, href, alt }) => {
  return (
    <div
      className='w-full h-[476px] flex justify-center items-center'
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_DATABASE_URL}${href})`,
        backgroundRepeat: 'no-repeat',
      }}
      alt={alt}
    >
      {children}
    </div>
  );
};

export default WideBgImage;
