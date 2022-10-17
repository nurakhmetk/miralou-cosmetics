import React from 'react';

const TeamMemberCard = ({ personData }) => {
  return (
    <div className='w-96 h-80 flex flex-col space-y-4 items-center'>
      <img
        src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${personData.attributes.Photo.data.attributes.url}`}
        alt=''
        draggable='false'
      />
      <span className='font-poppinsSemiBold text-sm'>
        {personData.attributes.Name.toLowerCase()}
      </span>
      <span className='font-poppinsRegular text-xs text-[#949494]'>
        {personData.attributes.Position.toLowerCase()}
      </span>
    </div>
  );
};

export default TeamMemberCard;
