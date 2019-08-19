import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const ServicesMenu = ({ service }) => {
  const [isActive, toggleIsActive] = useState(false);
  const [isOpen, toggleIsOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/services') {
      toggleIsActive(true);
    }
  }, []);

  return (
    <div className="font-serif leading-tight text-2xl uppercase">
      <div className="flex justify-between px-4 py-2">
        <h1>{service}</h1>
        <button
          onClick={() => toggleIsOpen(!isOpen)}
          className="border border-gray-500 font-light font-sans inline-block px-2 py-1 text-sm transition-all uppercase hover:bg-gray-800 hover:text-white focus:outline-none focus:bg-gray-800 focus:border-gray-800 focus:text-white"
          type="button"
        >
          Menu
        </button>
      </div>
      <ul className={`${isOpen ? '' : 'hidden'}`}>
        <li className="border-t last:border-b hover:border-gray-800">
          <Link
            to="/services/skin"
            className={`${
              isActive ? 'bg-gray-800 text-white border-gray-800' : ''
            } flex items-center justify-between leading-none px-4 py-1 uppercase transition-all w-full hover:bg-gray-800 hover:text-white`}
            activeClassName="bg-gray-800 text-white border-gray-800"
          >
            Skin
          </Link>
        </li>
        <li className="border-t last:border-b hover:border-gray-800">
          <Link
            to="/services/body"
            className="flex items-center justify-between leading-none px-4 py-1 uppercase transition-all w-full hover:bg-gray-800 hover:text-white"
            activeClassName="bg-gray-800 text-white border-gray-800"
          >
            Body
          </Link>
        </li>
        <li className="border-t last:border-b hover:border-gray-800">
          <Link
            to="/services/beauty"
            className="flex items-center justify-between leading-none px-4 py-1 uppercase transition-all w-full hover:bg-gray-800 hover:text-white"
            activeClassName="bg-gray-800 text-white border-gray-800"
          >
            Beauty
          </Link>
        </li>
        <li className="border-t last:border-b hover:border-gray-800">
          <Link
            to="/services/ipl-srh"
            className="flex items-center justify-between leading-none px-4 py-1 uppercase transition-all w-full hover:bg-gray-800 hover:text-white"
            activeClassName="bg-gray-800 text-white border-gray-800"
          >
            IPL/SRH
          </Link>
        </li>
      </ul>
    </div>
  );
};

ServicesMenu.propTypes = {
  service: PropTypes.string,
};

export default ServicesMenu;
