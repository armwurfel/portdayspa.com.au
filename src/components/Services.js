import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
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
    <div className="flex flex-wrap">
      <Image
        className="w-full"
        style={{ minHeight: `30rem`, height: `100%` }}
        fluid={data.file.childImageSharp.fluid}
        loading="eager"
      />
      <article
        id="services"
        className="flex flex-wrap max-w-6xl mx-auto px-4 py-24 w-full"
      >
        <div className="flex items-center justify-center w-full md:w-1/4">
          <h2 className="font-serif leading-tight text-2xl uppercase">
            {data.site.siteMetadata.title} Services
          </h2>
        </div>
        <div className="md:col-3 w-full md:w-3/4">
          <ul className="font-bold leading-loose">
            <li>Skin Consulation</li>
            <li>Signature Faicals</li>
            <li>Skin Workouts</li>
            <li>Skin Needling</li>
            <li>Radiance Plus</li>
            <li>Paramedical skin treatments</li>
            <li>Simultaneously</li>
            <li>Hydro-Brasion</li>
            <li>Spa Packages</li>
            <li>MassagesBody</li>
            <li>Beauty</li>
            <li>Lash Lift</li>
            <li>Waxing &amp; Tinting</li>
            <li>Makeup</li>
            <li>IPL/SHR</li>
          </ul>
        </div>
        <div className="mt-8 text-center w-full">
          <Link
            to="/services"
          <div className="mt-8 text-center w-full">
            <Link
              to="/services"
              className="border border-gray-500 inline-block leading-none px-2 py-1 uppercase"
            >
              View more information here
            </Link>
          </div>
      </article>
    </div>
  );
};

export default Services;
