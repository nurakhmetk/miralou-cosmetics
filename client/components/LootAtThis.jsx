import React from 'react';
import EmailSubscription from './shared/EmailSubscription';
import Timer from './shared/Timer';

const LootAtThis = ({ timerImage }) => {
  return (
    <div
      className='w-full flex flex-col h-[650px]'
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_DATABASE_URL}${timerImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='max-w-[73.125rem] m-auto w-full h-full text-white flex flex-col items-center py-24 px-56'>
        <div className='flex flex-col items-center space-y-4 mb-6'>
          <h2 className='font-mrsSaintDel text-4xl'>Look At This</h2>
          <h2 className='font-poppinsSemiBold text-3xl'>
            subscribe to our new collection
          </h2>
          <span className='w-72 h-1 bg-white'></span>
        </div>
        <span className='font-poppinsRegular text-sm mb-12'>starts in:</span>
        <div className='w-full flex flex-col items-center space-y-10 mb-8'>
          <Timer />
          <EmailSubscription />
        </div>
        <span className='font-poppinsRegular text-sm'>
          waiting for a new collection? subscribe to our news to know much more
        </span>
      </div>
    </div>
  );
};

export default LootAtThis;
