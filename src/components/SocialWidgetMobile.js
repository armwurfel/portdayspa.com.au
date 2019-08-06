import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';

const SocialWidgetMobile = () => {
  const data = useStaticQuery(graphql`
    query SocialWidgetMobileQuery {
      site {
        siteMetadata {
          facebook
          instagram
        }
      }
    }
  `);
  return (
    <div className="bg-white bottom-0 fixed flex items-end justify-center p-4 pointer-events-none w-screen z-50">
      <div>
        <a
          href={data.site.siteMetadata.facebook}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Facebook className="bg-white fill-current pointer-events-auto rounded-full text-gray-700 hover:text-gray-600 w-6" />
        </a>
      </div>
      <div className="ml-2">
        <a
          href={data.site.siteMetadata.instagram}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram className="bg-white fill-current pointer-events-auto rounded-full text-gray-700 hover:text-gray-600 w-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialWidgetMobile;
