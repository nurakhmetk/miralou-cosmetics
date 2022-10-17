import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ href, buttonLabel }) => {
  const router = useRouter();
  const style = {
    text:
      router.asPath === href
        ? 'font-poppinsSemiBold text-base line-through'
        : 'font-poppinsSemiBold text-base',
  };

  return (
    <Link href={href}>
      <a className={style.text}>{buttonLabel}</a>
    </Link>
  );
};

export default ActiveLink;
