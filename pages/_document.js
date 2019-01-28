import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="vi">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </Head>
        <body className="font-mono all:text-sm sm:text-lg text-black" style={{fontFamily: 'Inconsolata, monospace'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
