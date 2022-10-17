import AboutIntro from '../components/AboutIntro';
import Layout from '../components/Layout';
import Categories from '../components/shared/Categories';
import ShoppingBagIcon from '../asset/icons/shopping-bag.svg';
import SupportIcon from '../asset/icons/support.svg';
import SavingShopIcon from '../asset/icons/saving-shop.svg';
import ReviewsCarousel from '../components/shared/ReviewsCarousel';
import Partners from '../components/shared/Partners';
import OurTeam from '../components/shared/OurTeam';
import WideBgImage from '../components/shared/WideBgImage';

export default function About({
  heroBanner,
  introduction,
  categories,
  partners,
  teamInfo,
}) {
  return (
    <Layout title={'About | Miralou Cosmetics'} keywords={'about page'}>
      <WideBgImage href={heroBanner.url} alt={heroBanner.alternativeText}>
        <h1 className='font-poppinsBold text-5xl text-white'>about us</h1>
      </WideBgImage>
      <div className='max-w-[73.125rem] mx-auto flex flex-col py-24 space-y-24'>
        <AboutIntro introductionData={introduction} />
        <Categories categories={categories} />
      </div>
      <div className='w-full h-[420px] bg-black flex items-center justify-center'>
        <div className='w-full h-full max-w-[73.125rem] mx-auto flex justify-between items-center text-white'>
          <div className='w-1/3 h-full flex flex-col justify-between items-center  text-center px-10 py-24'>
            <ShoppingBagIcon />
            <h5 className='font-poppinsSemiBold text-xl'>shops worldwide</h5>
            <p className='font-poppinsRegular text-sm'>
              Orci fusce libero duis nunc nam aliquet suspendisse enim cras.
              Imperdiet turpis ut nulla sapien.
            </p>
          </div>
          <div className='w-1/3 h-full flex flex-col justify-between items-center  text-center px-10 py-24'>
            <SupportIcon />
            <h5 className='font-poppinsSemiBold text-xl'>24/7 support</h5>
            <p className='font-poppinsRegular text-sm'>
              Amet volutpat risus faucibus odio nunc. Placerat aliquet gravida
              id consequat pretium rutrum.
            </p>
          </div>
          <div className='w-1/3 h-full flex flex-col justify-between items-center  text-center px-10 py-24'>
            <SavingShopIcon />
            <h5 className='font-poppinsSemiBold text-xl'>big saving shop</h5>
            <p className='font-poppinsRegular text-sm'>
              Eleifend consequat dolor lorem feugiat id vestibulum suscipit elit
              sit. Purus velit id pretium mauris pretium.
            </p>
          </div>
        </div>
      </div>
      <div className='max-w-[73.125rem] mx-auto flex flex-col pt-24 space-y-24'>
        <div className='w-full flex flex-col items-center space-y-4'>
          <h2 className='font-mrsSaintDel text-4xl text-[#EF2853]'>
            Work With Best
          </h2>
          <h2 className='font-poppinsSemiBold text-3xl'>meet our team</h2>
        </div>
        <OurTeam teamInfo={teamInfo} />
      </div>
      <div className='w-full flex flex-col py-24 space-y-24'>
        <ReviewsCarousel />
        <Partners partners={partners} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const heroBannerRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/about-hero-banner?populate=*`
  );

  const introductionRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/about?populate=*`
  );
  const collectionRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/collection?populate=*`
  );

  const partnersRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/partner?populate=*`
  );

  const teamInfoRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/our-teams?populate=*`
  );

  const introductionData = await introductionRes.json();
  const heroBannerData = await heroBannerRes.json();
  const collectionData = await collectionRes.json();
  const partnersData = await partnersRes.json();
  const teamInfoData = await teamInfoRes.json();

  const introduction = introductionData.data.attributes;
  const heroBanner = heroBannerData.data.attributes.picture.data.attributes;
  const categories = collectionData.data.attributes;
  const partners = partnersData.data.attributes;
  const teamInfo = teamInfoData.data;

  return {
    props: {
      heroBanner,
      introduction,
      categories,
      partners,
      teamInfo,
    },
  };
}
