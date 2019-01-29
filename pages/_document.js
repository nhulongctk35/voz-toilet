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
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </Head>
        <body className="font-mono all:text-sm sm:text-lg">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
