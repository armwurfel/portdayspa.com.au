import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from './SEO';

const ServicesMenu = ({ service }) => {
  const [isActive, toggleIsActive] = useState(false);
  const [isOpen, toggleIsOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/services') {
      toggleIsActive(true);
    }
  }, []);

  return (
    <>
      <SEO title={service} />
      <div className="leading-tight uppercase">
        <div className="flex items-start justify-between leading-none px-4 py-4">
          <h1 className="font-serif text-3xl sm:text-4xl">{service}</h1>
          <button
            onClick={() => toggleIsOpen(!isOpen)}
            className="border border-gray-500 font-light font-sans inline-block px-2 py-1 text-sm transition-all uppercase hover:bg-gray-800 hover:border-gray-800 hover:text-white focus:outline-none focus:bg-gray-800 focus:border-gray-800 focus:text-white"
            type="button"
          >
            Menu
          </button>
        </div>
        <ul className={`${isOpen ? '' : 'hidden'}`}>
          <li className="border-t last:border-b border-gray-200 hover:border-gray-800">
            <Link
              to="/services/spa-packages"
              className={`${
                isActive ? 'bg-gray-800 text-white border-gray-800' : ''
              } flex items-center justify-between leading-none p-4 uppercase transition-all w-full hover:bg-gray-800 hover:text-white`}
              activeClassName="bg-gray-100 border-gray-100"
            >
              Spa Packages
            </Link>
          </li>
          <li className="border-t last:border-b border-gray-200 hover:border-gray-800">
            <Link
              to="/services/skin"
              className="flex items-center justify-between leading-none p-4 uppercase transition-all w-full hover:bg-gray-800 hover:text-white"
              activeClassName="bg-gray-100 border-gray-100"
            >
              Skin
            </Link>
          </li>
          <li className="border-t last:border-b border-gray-200 hover:border-gray-800">
            <Link
              to="/services/body"
              className="flex items-center justify-between leading-none p-4 uppercase transition-all w-full hover:bg-gray-800 hover:text-white"
              activeClassName="bg-gray-100 border-gray-100"
            >
              Body
            </Link>
          </li>
          <li className="border-t last:border-b border-gray-200 hover:border-gray-800">
            <Link
              to="/services/beauty"
              className="flex items-center justify-between leading-none p-4 uppercase transition-all w-full hover:bg-gray-800 hover:text-white"
              activeClassName="bg-gray-100 border-gray-100"
            >
              Beauty
            </Link>
          </li>
          <li className="border-t last:border-b border-gray-200 hover:border-gray-800">
            <Link
              to="/services/ipl-shr"
              className="flex items-center justify-between leading-none p-4 uppercase transition-all w-full hover:bg-gray-800 hover:text-white"
              activeClassName="bg-gray-100 border-gray-100"
            >
              IPL/SHR
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

ServicesMenu.propTypes = {
  service: PropTypes.string,
};

export default ServicesMenu;
