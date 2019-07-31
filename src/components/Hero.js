import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Logo from '../images/logo.svg';

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
        }
      }
    }
  `);
  return (
    <div className="relative">
      <div style={{ transform: `translateX(40%)` }}>
        <Image
          style={{ minHeight: `30rem`, height: `100%`, maxHeight: `75vh` }}
          fluid={data.file.childImageSharp.fluid}
          loading="eager"
        />
      </div>
      <div className="absolute flex flex-col font-sans inset-0 items-center justify-center p-4 text-center">
        <div className="max-w-sm mx-auto text-gray-700">
          <h1 className="leading-none text-6xl">
            <img
              className="h-64"
              src={Logo}
              alt={data.site.siteMetadata.title}
            />
          </h1>
          <p className="font-light leading-tight mb-8 text-2xl uppercase">
            Allow us to rejuvenate, rehydrate and re-new
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
