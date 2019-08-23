import React, { useEffect } from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const GiftVoucher = () => {
  useEffect(() => {
    (function(g, i, f, t, u, p) {
      i = g.createElement('script');
      f = g.getElementsByTagName('script')[0];
      i.async = 1;
      i.src = 'https://cdn.giftup.app/dist/gift-up.js';
      f.parentNode.insertBefore(i, f);
    })(document);
  }, []);
  return (
    <>
      <Layout>
        <SEO title="Gift Voucher" />
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
