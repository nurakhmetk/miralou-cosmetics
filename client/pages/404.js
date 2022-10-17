import axios from 'axios';
import Layout from '../components/Layout';
import ActionButton from '../components/shared/ActionButton';

export default function Custom404({ bgImage }) {
  return (
    <Layout title={'404 Error | Miralou Cosmetics'} keywords={'404 error page'}>
      <div
        className='h-screen text-2xl -mt-24 flex justify-center items-center bg-no-repeat'
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_DATABASE_URL}${bgImage.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='pt-20 w-[570px] h-64 flex flex-col items-center space-y-9'>
          <h1 className='font-mrsSaintDel text-[185px] text-[#EF2853]'>404</h1>
          <h2 className='font-poppinsSemiBold text-3xl'>page not found</h2>
          <p className='w-[90%] font-poppinsRegular text-sm text-center'>
            Unfortunately, this page does not exist. We apologize and give a 15%
            discount on any product.
          </p>
          <ActionButton actionLabel='back to shop' hideIcon={true} href='/' />
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const backgroundImageRes = await axios.get(
    `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/error-page?populate=*`
  );

  const backgroundImageData = await backgroundImageRes.data;

  const bgImage = await backgroundImageData.data.attributes.picture.data
    .attributes;

  return {
    props: {
      bgImage,
    },
  };
}
