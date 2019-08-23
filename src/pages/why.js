import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import WhyPageComponent from '../components/WhyPageComponent';
import Contact from '../components/Contact';
import Map from '../components/Map';

const WhyPage = ({ data }) => {
  return (
    <>
      <SEO title="Why" />
      <Layout>
        <WhyPageComponent />
        <Contact data={data} />
        <Map />
      </Layout>
    </>
  );
};

WhyPage.propTypes = {
  data: PropTypes.object,
};

export default WhyPage;

export const query = graphql`
  query WhyPageQuery {
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
