import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/gh-pages-portfolio/profile.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}