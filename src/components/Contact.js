import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import FacebookIcon from './icons/Facebook';
import InstagramIcon from './icons/Instagram';
import InstagramWidget from './Instagram';
import Form from './Form';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      hero: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          address
          email
          facebook
          googleMapsLink
          instagram
          phone
          phoneFormatted
        }
      }
    }
  `);
  return (
    <div className="flex flex-wrap">
      <Image
        className="w-full"
        style={{ minHeight: `30rem`, height: `100%`, maxHeight: `50rem` }}
        fluid={data.hero.childImageSharp.fluid}
        loading="eager"
      />
      <article
        id="contact"
        className="flex flex-wrap max-w-6xl mx-auto px-4 py-24 w-full"
      >
        <div className="flex flex-1 flex-col px-4 w-full md:w-1/2">
          <h2 className="font-serif leading-tight text-3xl uppercase">
            Contact us
          </h2>
          <p>
            Fill out the form below or you can find us at{' '}
            <strong>
              <a
                href={data.site.siteMetadata.googleMapsLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                {data.site.siteMetadata.address}
              </a>
            </strong>
          </p>
          <p>
            Phone us on{' '}
            <strong>
              <a href={`tel:${data.site.siteMetadata.phone}`}>
                {data.site.siteMetadata.phoneFormatted}
              </a>
            </strong>{' '}
            or email{' '}
            <strong>
              <a href={`mailto:${data.site.siteMetadata.email}`}>
                {data.site.siteMetadata.email}
              </a>
            </strong>
          </p>
          <p className="flex flex-wrap items-center mb-auto">
            <a
              className="py-2"
              href={data.site.siteMetadata.facebook}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookIcon className="fill-current mr-2 hover:text-gray-600 text-2xl" />{' '}
            </a>
            <a
              className="py-2"
              href={data.site.siteMetadata.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon className="fill-current mr-2 hover:text-gray-600 text-2xl" />
            </a>
            <span className="font-serif leading-none text-2xl uppercase">
              Follow us on social&nbsp;media
            </span>
          </p>
          <InstagramWidget />
        </div>
        <div className="flex w-full md:w-1/2">
          <Form />
        </div>
      </article>
    </div>
  );
};

export default Contact;
