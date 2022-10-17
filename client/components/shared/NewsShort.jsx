import React from 'react';
import LearnMoreButton from './LearnMoreButton';

const NewsShort = () => {
  const newsShort = {
    date: 'August 19, 2021',
    title: 'Quis egestas consectetur',
    content:
      'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  };
  return (
    <div className='w-full h-80 flex flex-col space-y-4 py-7 pl-10 pr-[4.25rem] items-start'>
      <span className='font-poppinsRegular text-xs text-[#949494]'>
        {newsShort.date}
      </span>
      <h4 className='font-poppinsSemiBold text-xl'>{newsShort.title}</h4>
      <p className='font-poppinsRegular text-sm'>{newsShort.content}</p>
      <LearnMoreButton />
    </div>
  );
};

export default NewsShort;
