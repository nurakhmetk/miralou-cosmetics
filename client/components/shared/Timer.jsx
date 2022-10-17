import React from 'react';

const Timer = () => {
  return (
    <div className='flex h-20 w-3/4 justify-between'>
      <div className='w-1/5 flex flex-col h-full justify-between items-center'>
        <span className='font-poppinsSemiBold text-5xl'>00</span>
        <span>month</span>
      </div>
      <div className='w-1/5 flex flex-col h-full justify-between items-center'>
        <span className='font-poppinsSemiBold text-5xl'>02</span>
        <span>days</span>
      </div>
      <div className='w-1/5 flex flex-col h-full justify-between items-center'>
        <span className='font-poppinsSemiBold text-5xl'>12</span>
        <span>hours</span>
      </div>
      <div className='w-1/5 flex flex-col h-full justify-between items-center'>
        <span className='font-poppinsSemiBold text-5xl'>44</span>
        <span>minutes</span>
      </div>
      <div className='w-1/5 flex flex-col h-full justify-between items-center'>
        <span className='font-poppinsSemiBold text-5xl'>23</span>
        <span>seconds</span>
      </div>
    </div>
  );
};

export default Timer;
