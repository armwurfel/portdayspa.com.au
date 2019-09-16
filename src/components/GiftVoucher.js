import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
// import { Parallax } from 'react-scroll-parallax';

const GiftVoucher = () => {
  const data = useStaticQuery(graphql`
    query GiftVoucherQuery {
      hero: file(relativePath: { eq: "gift-voucher.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      voucher: file(relativePath: { eq: "gift-card.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="overflow-hidden">
      {/* <Parallax y={[-30, 30]}> */}
      <Image
        className="w-full"
        style={{ minHeight: `30rem`, height: `100%`, maxHeight: `50rem` }}
        fluid={data.hero.childImageSharp.fluid}
        loading="eager"
      />
      {/* </Parallax> */}
      <article
        id="gift-voucher"
        className="bg-white px-4 md:px-6 py-24 relative w-full z-10"
      >
        <div className="flex flex-wrap max-w-6xl mx-auto w-full">
          <div className="w-full md:w-1/3">
            <h2 className="font-semibold font-serif leading-tight text-2xl uppercase">
              Spoil someone <br />
              with a gift <br />
              voucher
            </h2>
            <div className="mt-4">
              <p>
                Give the most memorable gift of all, allow us to wrap up
                tranquility and provide your loved one with a beautifully
                presented gift voucher.
              </p>
              <p>
                Purchasing your gift voucher has never been easier, you can
                select from our extensive spa packages, create your own special
                treatment from our spa menu or simply specify a dollar ($)
                amount and let them choose.
              </p>
              <p>
                <Link
                  to="/gift-voucher"
                  className="border border-gray-500 inline-block leading-none px-2 py-1 uppercase transition-all hover:bg-gray-800 hover:text-white hover:border-gray-800"
                >
                  Buy gift voucher
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:pl-12 w-full md:w-2/3">
            <Image
              className="w-full"
              style={{ transform: `rotate(-10deg)` }}
              fluid={data.voucher.childImageSharp.fluid}
              loading="eager"
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default GiftVoucher;
