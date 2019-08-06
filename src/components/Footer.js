import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Logo from './Logo';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      file(relativePath: { eq: "marble.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          abn
          address
          email
          googleMapsLink
          phone
          phoneFormatted
          title
        }
      }
    }
  `);

  return (
    <footer className="relative w-full">
      <div className="absolute inset-0 overflow-hidden">
        <Image className="h-full" fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className="mx-auto relative">
        <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto p-4 w-full">
          <Link to="/" className="w-full md:w-1/2">
            <Logo className="fill-current h-32" />
          </Link>
          <div className="uppercase w-full md:w-1/2">
            <p>
              <a href={`tel:${data.site.siteMetadata.phoneFormatted}`}>
                Phone: {data.site.siteMetadata.phoneFormatted}
              </a>
            </p>
            <p>
              <a
                href={data.site.siteMetadata.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Address: {data.site.siteMetadata.address}
              </a>
            </p>
            <p>Email: {data.site.siteMetadata.email}</p>
            <p>ABN: {data.site.siteMetadata.abn}</p>
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
              rel="noopener noreferrer"
              target="_blank"
            >
              Phiranno Designs
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
