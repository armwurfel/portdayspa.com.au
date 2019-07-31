import React from 'react';
import LazyLoad from 'react-lazyload';
import { graphql, useStaticQuery } from 'gatsby';

const Map = () => {
  const data = useStaticQuery(graphql`
    query MapQuery {
      site {
        siteMetadata {
          googleMapsEmbed
        }
      }
    }
  `);
  return (
    <LazyLoad height={512} once>
      <iframe
        src={data.site.siteMetadata.googleMapsEmbed}
        allowFullScreen
        className="w-full"
        frameBorder={0}
        title="map"
        height={512}
      />
    </LazyLoad>
  );
};

export default Map;
