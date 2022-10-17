import React, { useMemo, useState } from 'react';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';
import Breadcrumb from '../../../components/shared/Breadcrumb';
import ArrowIcon from '../../../asset/icons/arrow-gray.svg';
import StarIcon from '../../../asset/icons/star.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { useStateContext } from '../../../context/StateContext';
import ActionIcon from '../../../asset/icons/action-button-arrow.svg';

const ProductDetail = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const productTitle = product.attributes.Name;
  const router = useRouter();
  const [index, setIndex] = useState(0);

  const { decreaseQuantity, increaseQuantity, qty, onAdd, setShowCart } =
    useStateContext();

  return (
    <Layout title={'Shop | Miralou Cosmetics'} keywords={'blog'}>
      <Breadcrumb
        productTitle={productTitle}
        productHref={product.id}
        category={router.query.category}
      />
      <div className='h-full max-w-[73.125rem] m-auto flex-col pt-10 pb-24'>
        <div className='w-full h-96 flex space-x-28'>
          <div className='w-1/2 h-full flex'>
            <Swiper
              className='product-detail-swiper !space-y-7 !mr-5'
              direction={'vertical'}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={2}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
            >
              <SwiperSlide className='!w-full'>
                <img
                  src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${product.attributes.MainImage.data.attributes.url}`}
                  alt=''
                  className='w-full h-full'
                />
              </SwiperSlide>
              {product.attributes.Pictures.data?.map((item, i) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${item.attributes.url}`}
                    key={item.id}
                    className='w-full h-full'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className='!w-2/3 h-full flex justify-center items-center'
              modules={[FreeMode, Thumbs]}
              speed={1}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
            >
              <SwiperSlide>
                <img
                  src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${product.attributes.MainImage.data.attributes.url}`}
                  alt=''
                  className='w-full h-full'
                />
              </SwiperSlide>
              {product.attributes.Pictures.data?.map((item, i) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_DATABASE_URL}${item.attributes.url}`}
                    key={item.id}
                    className='w-full h-full'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='w-1/2 h-full flex flex-col space-y-6'>
            <h1 className='font-poppinsSemiBold text-3xl'>
              {product.attributes.Name}
            </h1>
            <div className='w-2/3 flex'>
              <div className='w-1/2 flex flex-col -space-y-6'>
                <span className='w-[100px] h-2 bg-black mb-10'></span>
                <div className='font-poppinsSemiBold text-xl'>
                  ${product.attributes.CurrentPrice}
                </div>
              </div>
              <div className='w-1/2 h-12 flex flex-col'>
                <div className='font-poppinsRegular text-xs'>
                  Product code: {product.attributes.ProductCode}
                </div>
                <div className='font-poppinsRegular text-xs'>
                  Tags: {product.attributes.Tags}
                </div>
              </div>
            </div>
            <p className='font-poppinsRegular text-sm'>
              {product.attributes.ShortDescription}
            </p>
            <div className='w-24 h-10 p-2 flex justify-between items-center border border-[#949494]'>
              <button onClick={decreaseQuantity}>
                <ArrowIcon />
              </button>
              <span className='font-poppinsSemiBold text-xl'>{qty}</span>
              <button onClick={increaseQuantity}>
                <ArrowIcon className='rotate-180' />
              </button>
            </div>
            <div className='w-full flex space-x-5'>
              <button
                className='w-44 h-[49px] bg-black flex justify-center items-center'
                onClick={() => onAdd(product, qty)}
              >
                <span className='text-white font-poppinsBold text-[13px] '>
                  add to the cart
                </span>
                <span className='ml-2'>
                  <ActionIcon />
                </span>
              </button>
              <button className='w-[49px] h-[49px] flex justify-center items-center border border-[#949494]'>
                <StarIcon />
              </button>
            </div>
          </div>
        </div>
        <div>desription</div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const productRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/products/${slug}?populate=*`
  );
  const productData = await productRes.json();

  const product = await productData.data;
  return {
    props: { product },
  };
}
