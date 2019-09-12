import React from 'react';
import Media from 'react-media';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
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
      mobile: file(relativePath: { eq: "hero-mobile.jpg" }) {
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
    <div className="overflow-hidden relative">
      <div className="max-w-6xl ml-auto">
        <ParallaxProvider>
          <Parallax className="hero-img" y={[-30, 30]}>
            <Media query="(min-width: 768px)">
              {matches =>
                matches ? (
                  <Image
                    style={{
                      minHeight: `35rem`,
                      height: `100%`,
                      maxHeight: `50rem`,
                      objectPosition: `right top`,
                    }}
                    fluid={data.hero.childImageSharp.fluid}
                    loading="eager"
                  />
                ) : (
                  <Image
                    className="opacity-75"
                    style={{
                      minHeight: `30rem`,
                      height: `100%`,
                      width: `100%`,
                      maxHeight: `50rem`,
                      objectPosition: `right top`,
                    }}
                    fluid={data.mobile.childImageSharp.fluid}
                    loading="eager"
                  />
                )
              }
            </Media>
          </Parallax>
        </ParallaxProvider>
      </div>
      <div className="absolute flex flex-col font-sans inset-0 px-16 py-8 text-gray-700">
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
  );
};

export default Hero;
