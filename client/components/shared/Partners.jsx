import React from 'react';

const Partners = ({ partners }) => {
  const partnersImagesArray = partners.partners.data.map((partner) => {
    const partnerObj = {
      url: partner.attributes.url,
      id: partner.id,
    };
    return partnerObj;
  });
  return (
    <div className='w-full h-32 max-w-[73.125rem] m-auto grid grid-flow-col grid-rows-1 content-center'>
      {partnersImagesArray &&
        partnersImagesArray.map((partner) => (
          <div
            key={partner.id}
            className='w-auto h-full flex justify-between items-center'
          >
            <img
              src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${partner.url}`}
              alt=''
              draggable='false'
            />
          </div>
        ))}
    </div>
  );
};

export default Partners;
