import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import SEO from '../components/SEO';
import Logo from '../components/Logo';
import InstagramIcon from '../components/icons/Instagram';
import FacebookIcon from '../components/icons/Facebook';

const SuccessPage = () => {
  const data = useStaticQuery(graphql`
    query SuccessPageQuery {
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
      <SEO title="Success" />
      <div className="font-sans relative text-gray-700">
        <Image className="h-screen" fluid={data.file.childImageSharp.fluid} />
        <div className="absolute flex flex-col items-center justify-center inset-0">
          <Link className="max-w-md px-8 w-full" to="/">
            <h1>
              <Logo className="fill-current w-full" />
            </h1>
          </Link>
          <div className="text-center">
            <h2 className="font-serif leading-none mt-12 text-xl sm:text-3xl oldstyle-nums uppercase">
              Form submitted successfully!
            </h2>
            <p className="mt-2">
              Thank you for your message. We will get back to you as soon as we
              can.
            </p>
          </div>
          <p className="mt-12">
            <Link
              to="/"
              className="border inline-block leading-none px-4 py-1 uppercase"
            >
              Home
            </Link>
          </p>
          <p className="flex flex-wrap items-center justify-center mt-12">
            <a className="my-2" href={data.site.siteMetadata.facebook}>
              <FacebookIcon className="fill-current mr-2 hover:text-gray-600 w-6" />{' '}
            </a>
            <a className="my-2" href={data.site.siteMetadata.instagram}>
              <InstagramIcon className="fill-current mr-2 hover:text-gray-600 w-6" />
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

export default SuccessPage;
