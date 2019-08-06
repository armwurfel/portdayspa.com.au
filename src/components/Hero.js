import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Logo from './Logo';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
          phone
          phoneFormatted
          email
          facebook
          instagram
        }
      }
    }
  `);
  return (
    <div className="relative">
      <div className="max-w-6xl ml-auto">
        <Image
          style={{ minHeight: `30rem`, height: `100%` }}
          fluid={data.file.childImageSharp.fluid}
          loading="eager"
        />
      </div>
      <div className="absolute flex flex-col font-sans inset-0 px-16 py-8 text-gray-700">
        <div className="hidden md:block leading-none uppercase -mx-3 text-sm">
          <Link className="inline-block mx-3" to="/">
            Home
          </Link>
          <Link className="inline-block mx-3" to="/">
            Why
          </Link>
          <Link className="inline-block mx-3" to="/">
            Services
          </Link>
          <Link className="inline-block mx-3" to="/">
            Gift Voucher
          </Link>
          <Link className="inline-block mx-3" to="/">
            Contact
          </Link>
          <Link
            className="border border-gray-500 inline-block mx-3 px-2 py-1"
            to="/"
          >
            Booking
          </Link>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center max-w-sm mx-auto text-center">
          <h1>
            <Logo className="fill-current h-24" />
          </h1>
          <p className="font-light leading-tight mt-8 mx-8 uppercase">
            Allow us to rejuvenate, <br />
            rehydrate and re-new
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
