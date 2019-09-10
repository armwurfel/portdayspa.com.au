import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Map from '../components/Map';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
const ContactPage = ({ data }) => {
  let parallax;
  return (
    <>
      <SEO title="Contact Us" />
      
      {/* <Layout> */}
      <Parallax scrolling={true} ref={ref => (parallax = ref)} pages={2.6}>
        <ParallaxLayer offset={0} speed={0}> 
        <Navbar />
        </ParallaxLayer>
        <Contact data={data} />
        <ParallaxLayer offset={1.7} speed={0.5}> 
          <Map />
        </ParallaxLayer>
        <ParallaxLayer offset={2.01} speed={0.5}> 
          <Footer />
        </ParallaxLayer>
      </Parallax>
      {/* </Layout> */}
    </>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object,
};

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    hero: file(relativePath: { eq: "contact-hero.jpg" }) {
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
