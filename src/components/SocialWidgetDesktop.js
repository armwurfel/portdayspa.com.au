import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';

const SocialWidgetDesktop = () => {
  const data = useStaticQuery(graphql`
    query SocialWidgetDesktopQuery {
      site {
        siteMetadata {
          facebook
          instagram
        }
      }
    }
  `);
  return (
    <div className="fixed flex flex-col flex-1 inset-y-0 justify-center left-0 p-4 pointer-events-none z-50">
      <div>
        <a
          href={data.site.siteMetadata.facebook}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Facebook className="bg-white fill-current pointer-events-auto rounded-full text-gray-700 hover:text-gray-600 text-2xl" />
        </a>
      </div>
      <div className="mt-2">
        <a
          href={data.site.siteMetadata.instagram}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram className="bg-white fill-current pointer-events-auto rounded-full text-gray-700 hover:text-gray-600 text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default SocialWidgetDesktop;
