import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Map from '../components/Map';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Layout>
      <Map />
    </Layout>
  </>
);

export default IndexPage;
