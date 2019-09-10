import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import BackToTop from './BackToTop';
import Logo from './Logo';
import { Parallax } from 'react-scroll-parallax';


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
    <footer className="mb-12 md:mb-0 relative w-full">
      <div className="absolute inset-0 overflow-hidden">
          <Parallax className="custom-class" y={[-50, 50]} >
            <Image
              className="h-full opacity-75"
              fluid={data.file.childImageSharp.fluid}
            />
          </Parallax>
      </div>
      <div className="mx-auto relative">
        <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto px-4 py-12 w-full">
          <Link to="/" className="w-full md:w-1/2">
            <Logo className="fill-current max-w-xs mx-auto w-full" />
          </Link>
          <div className="uppercase w-full md:w-1/2">
            <p>
              <strong>Phone: </strong>
              <a href={`tel:${data.site.siteMetadata.phone}`}>
                {data.site.siteMetadata.phoneFormatted}
              </a>
            </p>
            <p className="mt-0">
              <strong>Address: </strong>
              <a
                href={data.site.siteMetadata.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.site.siteMetadata.address}
              </a>
            </p>
            <p className="mt-0">
              <strong>Email: </strong>
              <a href={`mailto:${data.site.siteMetadata.email}`}>
                {data.site.siteMetadata.email}
              </a>
            </p>
            <p className="mt-0">
              <strong>ABN:</strong> {data.site.siteMetadata.abn}
            </p>
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
      <BackToTop />
    </footer>
  );
};

export default Footer;
