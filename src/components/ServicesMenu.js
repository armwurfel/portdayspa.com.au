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
    <div className="font-serif leading-tight px-12 py-6 text-2xl uppercase w-full md:w-1/3">
      <h1>{data.site.siteMetadata.title} Services Menu</h1>
      <ul className="list-dash ml-5 mt-4">
        <li>
          <Link to="/services/skin" activeClassName="underline" partiallyActive>
            Skin
          </Link>
        </li>
        <li>
          <Link to="/services/body" activeClassName="underline" partiallyActive>
            Body
          </Link>
        </li>
        <li>
          <Link
            to="/services/beauty"
            activeClassName="underline"
            partiallyActive
          >
            Beauty
          </Link>
        </li>
        <li>
          <Link
            to="/services/ipl-srh"
            activeClassName="underline"
            partiallyActive
          >
            IPL/SRH
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesMenu;
