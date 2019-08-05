import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Why from '../components/Why';
import Services from '../components/Services';
import GiftVoucher from '../components/GiftVoucher';
import Contact from '../components/Contact';
import Map from '../components/Map';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Layout>
      <Why />
      <Services />
      <GiftVoucher />
      <Contact />
      <Map />
    </Layout>
  </>
);

export default IndexPage;
