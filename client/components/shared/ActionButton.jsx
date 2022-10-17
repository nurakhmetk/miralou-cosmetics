import Link from 'next/link';
import React from 'react';
import ActionIcon from '../../asset/icons/action-button-arrow.svg';

const ActionButton = (props) => {
  const link = props.href || '#';
  const actionLabel = props.actionLabel || 'subscribe';
  const arrowIcon = !!props.hideIcon ? null : ActionIcon;
  const buttonWidth = props.buttonWidth || 'w-36';
  const buttonHeight = props.buttonHeight || 'h-[48px]';

  return (
    <Link href={link}>
      <a
        className={`${buttonWidth} ${buttonHeight} bg-black flex justify-center items-center`}
      >
        <span className='text-white font-poppinsBold text-[13px] '>
          {actionLabel}
        </span>
        {arrowIcon && (
          <span className='ml-2'>
            <ActionIcon />
          </span>
        )}
      </a>
    </Link>
  );
};

export default ActionButton;
