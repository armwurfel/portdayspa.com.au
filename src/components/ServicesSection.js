import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const ServicesSection = () => {
  const data = useStaticQuery(graphql`
    query ServicesSectionQuery {
      file(relativePath: { eq: "services.jpg" }) {
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
    <>
      <Parallax y={[-50, 50]}>
        <div className="overflow-hidden">
          <Image
            style={{
              minHeight: `30rem`,
              height: `100%`,
              maxHeight: `50rem`,
              width: `100%`,
            }}
            fluid={data.file.childImageSharp.fluid}
            loading="eager"
          />
        </div>
      </Parallax>
      <article
        id="services"
        className="bg-white px-4 md:px-6 py-24 relative w-full z-10"
      >
        <div className="flex flex-wrap max-w-6xl  mx-auto w-full">
          <div className="flex items-center justify-center w-full md:w-2/5">
            <h2 className="font-semibold font-serif leading-tight md:p-10 text-2xl uppercase w-full">
              {data.site.siteMetadata.title} Services
            </h2>
          </div>
          <div className="md:col-3 w-full md:w-3/5">
            <ul className="font-bold leading-none pr-12">
              <li className="mt-4 md:mt-0">Skin Consultations</li>
              <li className="mt-4">Signature Facials</li>
              <li className="mt-4">Skin Workouts</li>
              <li className="mt-4">Skin Needling</li>
              <li className="mt-4">Paramedical Skin Treatments</li>
              <li className="mt-4">Microdermabrasion</li>
              <li className="mt-4">IPL/ SHR</li>
              <li className="mt-4">Spa Packages</li>
              <li className="mt-4">Massage</li>
              <li className="mt-4">Waxing &amp; Tinting</li>
              <li className="mt-4">Lash Lifting</li>
              <li className="mt-4">Makeup</li>
              <li className="mt-4">Manicures &amp; Pedicures</li>
            </ul>
          </div>
          <div className="mt-8 text-center w-full">
            <Link
              to="/services"
              className="border border-gray-500 inline-block leading-none px-2 py-1 uppercase transition-all hover:bg-gray-800 hover:text-white hover:border-gray-800"
            >
              View more information here
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ServicesSection;
