import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Logo from '../../images/logo.svg';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <footer className="mx-auto w-full">
      <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto p-4 w-full">
        <div className="w-full md:w-1/2">
          <img className="h-32" src={Logo} alt={data.site.siteMetadata.title} />
        </div>
        <div className="w-full md:w-1/2">
          <p>Phone:</p>
          <p>Address:</p>
          <p>Email:</p>
          <p>ABN:</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center mb-0 p-4 text-center w-full">
        <span className="flex-no-shrink w-full md:w-auto">
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
        </span>
        <span className="hidden md:block mx-2 w-full md:w-auto">|</span>
        <span className="flex-no-shrink w-full md:w-auto">
          Website by
          <a
            className="font-semibold inline-flex px-1"
            href="https://phirannodesigns.com.au"
            rel="nofollow"
          >
            Phiranno Designs
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
