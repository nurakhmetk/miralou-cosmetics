import React from 'react';
import Link from 'next/link';

import MiralouLogo from '../asset/logo/miralou-logo-white.svg';

import FacebookIcon from '../asset/icons/facebook.svg';
import VlogoIcon from '../asset/icons/vlogo.svg';
import InstagramIcon from '../asset/icons/instagram.svg';
import TwitterIcon from '../asset/icons/twitter.svg';

import LocationIcon from '../asset/icons/location.svg';
import PhoneIcon from '../asset/icons/phone.svg';
import EmailIcon from '../asset/icons/email.svg';

const Footer = () => {
  return (
    <footer className='w-full h-80 bg-black text-white'>
      <div className='max-w-[73.125rem] m-auto w-full h-full flex flex-col justify-between items-center pb-4 '>
        <div className='w-full h-full pt-16 pb-14 flex justify-between'>
          <div className='w-1/6 flex flex-col justify-between'>
            <MiralouLogo />
            <p className='font-poppinsRegular text-xs leading-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className='w-full h-5  flex justify-between items-center'>
              <FacebookIcon />
              <VlogoIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
          <div className='w-1/7 flex flex-col'>
            <h4 className='font-poppinsSemiBold text-xl h-1/4 mb-2'>
              Information
            </h4>
            <ul className='font-poppinsRegular h-3/5 text-sm flex flex-col justify-between'>
              <li>
                <Link href='/about'>
                  <a className='hover:underline'>About Miralou</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className='hover:underline'>FAQ</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className='hover:underline'>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-1/7 flex flex-col'>
            <h4 className='font-poppinsSemiBold text-xl h-1/4 mb-2'>
              Quick Links
            </h4>
            <ul className='font-poppinsRegular h-3/5 text-sm flex flex-col justify-between'>
              <li>
                <Link href='/'>
                  <a className='hover:underline'>Wishlist</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className='hover:underline'>Checkout</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className='hover:underline'>Cart</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-auto flex flex-col'>
            <h4 className='font-poppinsSemiBold text-xl h-1/4 mb-2'>
              Contact Us
            </h4>
            <ul className='font-poppinsRegular h-3/5 text-sm flex flex-col justify-between'>
              <li className='flex space-x-3 items-center'>
                <LocationIcon />
                <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
              </li>
              <li className='flex space-x-3 items-center'>
                <PhoneIcon />
                <span>(808) 555-0111</span>
              </li>
              <li className='flex space-x-3 items-center'>
                <EmailIcon />
                <span>miralou.conacts@example.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full h-8 border-t-[1px] border-[#949494] flex justify-between items-end font-poppinsSemiBold text-sm'>
          <span>Copyright © 2022 Miralou</span>
          <span>All right reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
