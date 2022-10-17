import React from 'react';
import ActionButton from './ActionButton';
import NewsShort from './NewsShort';

const LatestNews = () => {
  const knowMore = {
    Title: 'latest news',
    Paragraph:
      'Nunc rhoncus auctor risus tempor lacus urna, id laoreet sed. Euismod nisl pellentesque risus cursus fringilla tincidunt volutpat, non.',
  };
  return (
    <div className='w-full py-20 bg-[#FAFAFA]'>
      <div className='max-w-[73.125rem] m-auto flex flex-col items-center'>
        <div className='flex flex-col space-y-9 items-center mb-10'>
          <h2 className=' font-poppinsSemiBold text-3xl'>{knowMore.Title}</h2>
          <p className=' text-center max-w-xl font-poppinsRegular text-sm text-[#949494] break-words'>
            {knowMore.Paragraph}
          </p>
        </div>
        <div className='w-full flex'>
          <NewsShort />
          <NewsShort />
          <NewsShort />
        </div>
        <ActionButton actionLabel='see more' />
      </div>
    </div>
  );
};

export default LatestNews;
