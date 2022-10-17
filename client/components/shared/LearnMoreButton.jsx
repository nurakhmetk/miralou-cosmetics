import React from 'react';
import Link from 'next/link';
import ActionIcon from '../../asset/icons/action-button-arrow-black.svg';

const LearnMoreButton = (props) => {
  const link = props.link ? props.link : '/404';

  return (
    <Link href={link}>
      <a className='font-poppinsBold text-[13px] flex justify-center items-center'>
        learn more
        <span className='ml-2'>
          <ActionIcon />
        </span>
      </a>
    </Link>
  );
};

export default LearnMoreButton;
