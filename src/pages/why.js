import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { withController } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

import ParalaxUpdate from '../components/ParalaxUpdate';
import Layout from '../components/Layout';
import Why from '../components/Why';
import Contact from '../components/Contact';
import Map from '../components/Map';

const WhyPage = ({ data, parallaxController }) => {
  return (
    <ParalaxUpdate>
      <Layout>
        <Why />
        <Contact data={data} />
        <Map />
      </Layout>
    </ParalaxUpdate>
  );
};

WhyPage.propTypes = {
  data: PropTypes.object,
  parallaxController: PropTypes.object,
};

export default withController(WhyPage);

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
