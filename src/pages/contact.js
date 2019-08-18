import React from 'react';
import { graphql } from 'gatsby';
import { withController } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

import ParalaxUpdate from '../components/ParalaxUpdate';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Map from '../components/Map';

const ContactPage = ({ data }) => {
  return (
    <ParalaxUpdate>
      <Layout>
        <Contact data={data} />
        <Map />
      </Layout>
    </ParalaxUpdate>
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
