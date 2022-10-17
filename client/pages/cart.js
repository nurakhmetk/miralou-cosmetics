import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';

import Layout from '../components/Layout';
import EmptyCart from '../components/EmptyCart';
import WideBgImage from '../components/shared/WideBgImage';
import { useStateContext } from '../context/StateContext';
import CartProducts from '../components/CartProducts';
import { useEffect, useRef } from 'react';

export default function Cart({ banner }) {
  const { data: session } = useSession();

  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  return (
    <Layout title={'Cart | Miralou Cosmetics'} keywords='shopping cart page'>
      <WideBgImage href={banner.url} alt={banner.alternativeText}>
        <h1 className='font-poppinsBold text-5xl text-white'>cart</h1>
      </WideBgImage>
      <div className='text-2xl flex justify-center items-center'>
        {cartItems.length > 0 ? (
          <CartProducts cartItems={cartItems} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const bannerRes = await axios.get(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/cart-herobanner?populate=*`
  );
  const bannerData = await bannerRes.data.data.attributes.picture.data
    .attributes;
  const banner = await bannerData;
  return {
    props: { banner },
  };
};
