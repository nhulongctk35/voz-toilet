import React from 'react';
import Head from 'next/head';

function Meta({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <style global jsx>{`
        body {
          background-color: rgb(30, 34, 39);
          color: #fff;
        }
      `}</style>
    </div>
  );
}

Meta.defaultProps = {
  title: 'VOZ Toilet News',
};

export default Meta;
