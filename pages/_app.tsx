import '../src/_global.css';
import React from 'react';
import Head from 'next/head';

export default function MyApp ( {Component, pageProps} ) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/gh-pages-portfolio/profile.png" />
        <title>Naoki's portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}