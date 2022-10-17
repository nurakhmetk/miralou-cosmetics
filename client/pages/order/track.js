import { getSession } from 'next-auth/react';

export default function Track() {
  return (
    <div>
      <h1>Checkout page</h1>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
      },
    };
  }
  return {
    props: { session },
  };
};
