import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const ServicesMenu = () => {
  const data = useStaticQuery(graphql`
    query ServicesTemplateQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="font-serif leading-tight text-2xl uppercase w-full md:w-1/3">
      <div className="bg-white border px-12 py-6">
        <h1>{data.site.siteMetadata.title} Services Menu</h1>
        <ul className="mt-4">
          <li className="mt-2">
            <Link
              to="/services/skin"
              className="bg-white border border-gray-500 inline-block leading-none px-2 py-1 uppercase transition-all w-full hover:bg-gray-800 hover:text-white hover:border-gray-800"
              activeClassName="underline"
              partiallyActive
            >
              <div className="flex justify-between">
                <span>Skin</span>
                <span>></span>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/services/body"
              className="bg-white border border-gray-500 inline-block leading-none px-2 py-1 uppercase transition-all w-full hover:bg-gray-800 hover:text-white hover:border-gray-800"
              activeClassName="underline"
              partiallyActive
            >
              Body
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/services/beauty"
              className="bg-white border border-gray-500 inline-block leading-none px-2 py-1 uppercase transition-all w-full hover:bg-gray-800 hover:text-white hover:border-gray-800"
              activeClassName="underline"
              partiallyActive
            >
              Beauty
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/services/ipl-srh"
              className="bg-white border border-gray-500 inline-block leading-none px-2 py-1 uppercase transition-all w-full hover:bg-gray-800 hover:text-white hover:border-gray-800"
              activeClassName="underline"
              partiallyActive
            >
              IPL/SRH
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesMenu;
