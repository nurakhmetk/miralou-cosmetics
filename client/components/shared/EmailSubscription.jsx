import React from 'react';
import ActionButton from './ActionButton';

const EmailSubscription = () => {
  return (
    <div className='w-5/6 h-12 flex space-x-6'>
      <input
        type='email'
        className='w-3/4 h-full pl-8 py-3  placeholder:text-black outline-none text-black font-poppinsRegular text-sm'
        placeholder='e-mail'
      />
      <ActionButton />
    </div>
  );
};

export default EmailSubscription;
