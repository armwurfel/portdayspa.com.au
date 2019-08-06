import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { graphql, useStaticQuery } from 'gatsby';

import Facebook from './icons/Facebook';

const SocialWidgetMobile = () => {
  const data = useStaticQuery(graphql`
    query SocialWidgetMobileQuery {
      site {
        siteMetadata {
          email
          facebook
          instagram
          phone
          phoneFormatted
        }
      }
    }
  `);
  return (
    <div className="bottom-0 pointer-events-none fixed w-full z-50">
      <div className="bg-white flex items-end justify-around p-4">
        <a href={`tel:${data.site.siteMetadata.phone}`}>
          <MdPhone className="bg-white fill-current rounded-full text-gray-700 hover:text-gray-600 text-xl" />
        </a>
        <a href={data.site.siteMetadata.facebook}>
          <Facebook className="bg-white fill-current rounded-full text-gray-700 hover:text-gray-600 text-xl" />
        </a>
        <a href={`mailto:${data.site.siteMetadata.email}`}>
          <MdEmail className="bg-white fill-current rounded-full text-gray-700 hover:text-gray-600 text-xl" />
        </a>
      </div>
    </div>
  );
};

export default SocialWidgetMobile;
