import React from 'react';
import Media from 'react-media';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Logo from './Logo';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      marble: file(relativePath: { eq: "marble.jpg" }) {
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
    <ParallaxProvider>
      <div className="overflow-hidden relative">
        <div className="max-w-6xl ml-auto">
          <Parallax y={[-50, 50]}>
            <Media query="(min-width: 768px)">
              {matches =>
                matches ? (
                  <Image
                    style={{
                      minHeight: `30rem`,
                      height: `100%`,
                    }}
                    fluid={data.hero.childImageSharp.fluid}
                    loading="eager"
                  />
                ) : (
                  <Image
                    style={{ minHeight: `30rem`, height: `100%` }}
                    fluid={data.marble.childImageSharp.fluid}
                    loading="eager"
                  />
                )
              }
            </Media>
          </Parallax>
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
          <div className="flex flex-1 flex-col items-center justify-center max-w-xl mx-auto text-center w-full">
            <h1 className="w-full">
              <Logo className="fill-current w-full" />
            </h1>
            <p className="font-light leading-tight max-w-sm mt-8 mx-8 uppercase">
              Allow us to rejuvenate, <br />
              rehydrate and re-new
            </p>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Hero;
