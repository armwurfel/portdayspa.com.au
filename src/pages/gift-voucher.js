import React, { useEffect, useState } from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const GiftVoucher = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (function(g) {
      const i = g.createElement('script');
      const f = g.getElementsByTagName('script')[0];
      i.async = 1;
      i.src = 'https://cdn.giftup.app/dist/gift-up.js';
      f.parentNode.insertBefore(i, f);
    })(document);
  }, []);

  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  let content;

  if (!isLoaded) {
    content = (
      <div className="absolute bg-white flex flex-1 inset-0 min-h-screen justify-center z-10">
        <h2 className="font-semibold font-serif leading-tight text-2xl text-center uppercase">
          Loading...
        </h2>
      </div>
    );
  }
  return (
    <>
      <Layout>
        <SEO title="Gift Voucher" />
        {content}
        <div
          className="gift-up-target"
          data-site-id="a0115535-5c3d-4925-b7cb-332e007a80c5"
          data-platform="Other"
        />
      </Layout>
    </>
  );
};

export default GiftVoucher;
