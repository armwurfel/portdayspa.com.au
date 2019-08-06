import React from 'react';
import Media from 'react-media';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Why from '../components/Why';
import Services from '../components/Services';
import GiftVoucher from '../components/GiftVoucher';
import Contact from '../components/Contact';
import Map from '../components/Map';
import SocialWidgetDesktop from '../components/SocialWidgetDesktop';
import SocialWidgetMobile from '../components/SocialWidgetMobile';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Media query="(min-width: 768px)">
      {matches => (matches ? <SocialWidgetDesktop /> : <SocialWidgetMobile />)}
    </Media>
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
