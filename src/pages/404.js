import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import SEO from '../components/SEO';
import Logo from '../components/Logo';
import InstagramIcon from '../components/icons/Instagram';
import FacebookIcon from '../components/icons/Facebook';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query NotFoundPageQuery {
      file(relativePath: { eq: "marble.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          facebook
          instagram
        }
      }
    }
  `);

  return (
    <>
      <SEO title="404: Not found" />
      <div className="font-sans relative text-gray-700">
        <Image
          className="h-screen opacity-75"
          fluid={data.file.childImageSharp.fluid}
        />
        <div className="absolute flex flex-col items-center justify-center inset-0">
          <Link className="max-w-md px-8 w-full" to="/">
            <h1>
              <Logo className="fill-current w-full" />
            </h1>
          </Link>
          <h2 className="font-serif mt-2 text-6xl oldstyle-nums">404</h2>
          <p>Sorry this page was not found.</p>
          <p className="mt-12">
            <Link
              to="/"
              className="border inline-block leading-none px-4 py-1 transition-all uppercase hover:bg-gray-800 hover:border-gray-800 hover:text-white"
            >
              Home
            </Link>
          </p>
          <p className="flex flex-wrap items-center justify-center mt-12">
            <a
              className="my-2"
              href={data.site.siteMetadata.facebook}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookIcon className="fill-current h-6 mr-2 hover:text-gray-600 w-6" />{' '}
            </a>
            <a
              className="my-2"
              href={data.site.siteMetadata.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon className="fill-current h-6 mr-2 hover:text-gray-600 w-6" />
            </a>
            <span className="flex-shrink-0 font-serif uppercase">
              Follow us on social media
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
