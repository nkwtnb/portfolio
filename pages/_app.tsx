import '../src/_global.css';
import React from 'react';
import Head from 'next/head';

export default function MyApp ( {Component, pageProps} ) {
  return (
    <>
      <Head>
        <title>Naoki's portfolio</title>
        </Head>
      <Component {...pageProps} />
    </>
  )
}