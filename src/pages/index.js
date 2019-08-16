import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { ParallaxProvider, withController } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeroNav from '../components/HeroNav';
import Hero from '../components/Hero';
import Why from '../components/Why';
import ServicesSection from '../components/ServicesSection';
import GiftVoucher from '../components/GiftVoucher';
import Contact from '../components/Contact';
import Map from '../components/Map';

const IndexPage = props => {
  console.log(props);
  // useEffect(() => {
  //   window.addEventListener('load', event => {
  //     parallaxController.update();
  //   });
  // }, [parallaxController]);

  return (
    <ParallaxProvider>
      <SEO title="Home" />
      <HeroNav />
      <Hero />
      <Layout>
        <Why />
        <ServicesSection />
        <GiftVoucher />
        <Contact data={props.data} />
        <Map />
      </Layout>
    </ParallaxProvider>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default withController(IndexPage);

export const query = graphql`
  query IndexPageQuery {
    hero: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        address
        email
        facebook
        googleMapsLink
        instagram
        phone
        phoneFormatted
      }
    }
  }
`;
