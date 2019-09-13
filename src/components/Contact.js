import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';

import FacebookIcon from './icons/Facebook';
import InstagramIcon from './icons/Instagram';
import InstagramWidget from './Instagram';
import ContactImg from './ContactImg';
import Form from './Form';

const Contact = ({ data }) => {
  return (
    <div className="overflow-hidden relative z-10">
      <Parallax className="contact-page-img" y={[-30, 30]}>
        <ContactImg fluid={data.hero.childImageSharp.fluid} />
      </Parallax>
      <article id="contact" className="bg-white px-4 py-24 relative w-full">
        <div className="flex flex-wrap max-w-6xl mx-auto">
          <div className="flex flex-1 flex-col px-4 w-full md:w-1/2">
            <h2 className="font-semibold font-serif leading-tight text-2xl uppercase">
              Contact us
            </h2>
            <p>
              Fill out the form below or you can find us at <br />
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
                aria-label="Facebook"
                href={data.site.siteMetadata.facebook}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookIcon className="fill-current mr-2 hover:text-gray-600 text-2xl" />{' '}
              </a>
              <a
                className="py-2"
                aria-label="Instagram"
                href={data.site.siteMetadata.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <InstagramIcon className="fill-current mr-2 hover:text-gray-600 text-2xl" />
              </a>
              <span className="font-semibold font-serif leading-none text-xl uppercase">
                Follow us on social&nbsp;media
              </span>
            </p>
            <InstagramWidget />
          </div>
          <div className="flex w-full md:w-1/2">
            <Form />
          </div>
        </div>
      </article>
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
};

export default Contact;
