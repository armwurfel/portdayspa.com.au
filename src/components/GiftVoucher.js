import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

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
    <div className="flex flex-wrap">
      <Image
        className="w-full"
        style={{ minHeight: `30rem`, height: `100%` }}
        fluid={data.hero.childImageSharp.fluid}
        loading="eager"
      />
      <article
        id="gift-voucher"
        className="flex flex-wrap max-w-6xl mx-auto px-4 py-24 w-full"
      >
        <div className="w-full md:w-1/3">
          <h2 className="font-serif leading-tight text-2xl uppercase">
            Spoil someone <br />
            with a gift <br />
            voucher
          </h2>
          <p>
            Give the most memorable gift of all allow us to wrap up tranquility
            and provide your loved one with a beautifully presented gift
            voucher.
          </p>
          <p>Purchasing your gift voucher has never been easier, you can</p>
          <p>
            Select from our extensive spa packages, create your own special
            treatment from our spa menu or simply specify a dollar ($) amount
            and let them choose.
          </p>
          <p>
            <Link
              to="/gift-voucher"
              className="border inline-block leading-none px-2 py-1 uppercase"
            >
              Click here to order a gift voucher
            </Link>
          </p>
        </div>
        <div className="md:pl-12 w-full md:w-2/3">
          <Image
            className="w-full"
            style={{ transform: `rotate(-10deg)` }}
            fluid={data.voucher.childImageSharp.fluid}
            loading="eager"
          />
        </div>
      </article>
    </div>
  );
};

export default GiftVoucher;
