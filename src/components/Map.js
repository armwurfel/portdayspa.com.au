import React from 'react';
import LazyLoad from 'react-lazyload';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Map = () => {
  const data = useStaticQuery(graphql`
    query MapQuery {
      site {
        siteMetadata {
          googleMapsEmbed
        }
      }
      afterpay: file(relativePath: { eq: "afterpay.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <Image
        fluid={data.afterpay.childImageSharp.fluid}
        alt="We accept afterpay."
      />
      <LazyLoad height={256} once>
        <iframe
          src={data.site.siteMetadata.googleMapsEmbed}
          allowFullScreen
          className="mt-auto relative w-full"
          frameBorder={0}
          title="map"
          height={256}
        />
      </LazyLoad>
    </>
  );
};

export default Map;
