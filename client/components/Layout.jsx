import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, keywords, title }) => {
  return (
    <>
      <Head>
        <meta keywords={'miralou, cosmetics, ' + keywords}></meta>
        <title>{title}</title>
      </Head>
      <div className='w-full flex flex-wrap flex-col items-center relative'>
        <Navbar />
        <main className='w-full flex-auto'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
