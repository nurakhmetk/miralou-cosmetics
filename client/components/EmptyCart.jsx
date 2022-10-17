import React from 'react';
import ActionIcon from '../asset/icons/action-button-arrow.svg';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const EmptyCart = () => {
  const { data: session } = useSession();

  return (
    <div className='py-20 w-[680px] h-full flex flex-col justify-center items-center space-y-9'>
      <h1 className='font-mrsSaintDel text-4xl text-[#EF2853]'>Miralou</h1>
      <h2 className='font-poppinsSemiBold text-3xl'>
        your shopping cart is empty
      </h2>
      <p className='w-full font-opensansLight text-[18px] text-center leading-7'>
        Aliquam ipsum tristique gravida amet a, pellentesque tempor euismod.
        Maecenas id consequat, tortor enim, in consectetur amet, felis fames.
        Fringilla quis at sed tristique.are sed.
      </p>
      <div className='flex space-x-7'>
        <Link href='/shop'>
          <a className='w-48 h-12 bg-black flex justify-center items-center'>
            <span className='text-white font-poppinsBold text-[13px] '>
              back to shopping
            </span>
            <span className='ml-2'>
              <ActionIcon />
            </span>
          </a>
        </Link>
        {session && (
          <button
            className='w-auto h-12 bg-black flex justify-center items-center px-6'
            onClick={() => signOut()}
          >
            <span className='text-white font-poppinsBold text-[13px] '>
              sign out
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyCart;
