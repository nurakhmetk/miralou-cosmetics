import '../styles/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import 'swiper/css/bundle';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps, session }) {
  return (
    <StateContext>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </StateContext>
  );
}

export default MyApp;
