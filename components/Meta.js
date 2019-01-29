import React from 'react';
import Head from 'next/head';

function Meta({ title, desc }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" id="root-desc" content={desc} />
      </Head>
    </div>
  );
}

Meta.defaultProps = {
  title: 'VOZ Toilet News',
  desc: 'The fastest way to read news on the VOZ site',
};

export default Meta;
