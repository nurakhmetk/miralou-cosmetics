import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import MainPage from '../components/MainPage';
import LatestNews from '../components/shared/LatestNews';
import TestSkeleton from '../components/shared/skeletonLoaders/testSkeleton';

const PopularProducts = dynamic(() => import('../components/PopularProducts'), {
  suspense: true,
});
const Categories = dynamic(() => import('../components/shared/Categories'), {
  suspense: true,
});
const KnowMore = dynamic(() => import('../components/KnowMore'), {
  suspense: true,
});
const Partners = dynamic(() => import('../components/shared/Partners'), {
  suspense: true,
});
const ReviewsCarousel = dynamic(
  () => import('../components/shared/ReviewsCarousel'),
  { suspense: true }
);
const LootAtThis = dynamic(() => import('../components/LootAtThis'), {
  suspense: true,
});
const InstagramPhotos = dynamic(
  () => import('../components/shared/InstagramPhotos'),
  { suspense: true }
);

export default function Home(props) {
  return (
    <Layout title={'Home | Miralou Cosmetics'} keywords={'homepage'}>
      <MainPage imagePath={props.herobanner} />
      <div className='w-full space-y-20'>
        <div className='max-w-[73.125rem] m-auto flex flex-col pb-24 space-y-24'>
          <Suspense fallback={<TestSkeleton />}>
            <PopularProducts products={props.products} />
          </Suspense>
          <div className='w-full flex flex-col items-center space-y-4 mb-10'>
            <h2 className='font-mrsSaintDel text-4xl text-[#EF2853]'>
              Categories
            </h2>
            <h2 className='font-poppinsSemiBold text-3xl'>
              add our new arrivals to your weekly lineup
            </h2>
            <span className='w-72 h-1 bg-black'></span>
          </div>
          <Suspense fallback={<TestSkeleton />}>
            <Categories categories={props.categories} />
            <Partners partners={props.partners} />
            <KnowMore knowMore={props.knowMore} />
          </Suspense>
        </div>
        <LatestNews />
        <Suspense fallback={<TestSkeleton />}>
          <ReviewsCarousel reviews={props.reviews} />
          <InstagramPhotos instaPhotos={props.instaPhotos} />
          <LootAtThis timerImage={props.timerImage} />
        </Suspense>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ req }) {
  const reviewRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/service-reviews?populate=*`
  );
  const instaPhotosRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/instagram-photo?populate=*`
  );
  const knowMoreRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/know-more?populate=*`
  );
  const timerImageRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/timer?populate=*`
  );
  const partnersRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/partner?populate=*`
  );
  const herobannerRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/homepage-hero-banner?populate=*`
  );
  const collectionRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/collection?populate=*`
  );
  const productsRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/products?populate=*`
  );

  const reviewData = await reviewRes.json();
  const instaPhotosData = await instaPhotosRes.json();
  const knowMoreData = await knowMoreRes.json();
  const timerImageData = await timerImageRes.json();
  const partnersData = await partnersRes.json();
  const collectionData = await collectionRes.json();
  const herobannerData = await herobannerRes.json();
  const productsData = await productsRes.json();

  const instaPhotos = instaPhotosData.data.attributes.photos.data;
  const knowMore = knowMoreData.data.attributes;
  const timerImage =
    timerImageData.data.attributes.timerImage.data.attributes.url;
  const partners = partnersData.data.attributes;
  const categories = collectionData.data.attributes;
  const herobanner = herobannerData.data.attributes.picture.data.attributes.url;
  const products = productsData.data;
  const reviews = reviewData.data;

  return {
    props: {
      products,
      herobanner,
      categories,
      partners,
      timerImage,
      knowMore,
      instaPhotos,
      reviews,
    },
  };
}
