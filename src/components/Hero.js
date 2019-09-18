import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Parallax } from 'react-scroll-parallax';
import Logo from './Logo';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      mobileImage: file(relativePath: { eq: "hero-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
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
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 640px)`,
    },
  ];
  return (
    <div className="relative">
      <Parallax y={[-30, 30]}>
        <Image
          fluid={sources}
          loading="eager"
          className="hero-img opacity-75 -ml-32 sm:ml-0 sm:opacity-100"
          style={{
            minHeight: `30rem`,
            height: `100%`,
          }}
        />
      </Parallax>
      <div className="absolute flex flex-col font-sans inset-0 px-16 py-8 text-gray-700">
        <div className="flex flex-1 flex-col items-center justify-center max-w-xl mx-auto text-center w-full sm:mt-20">
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
  );
};

export default Hero;
