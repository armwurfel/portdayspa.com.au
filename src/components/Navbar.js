import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Logo from './Logo';

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-white md:flex items-center leading-none relative sticky top-0 w-full z-50">
      <div className="flex justify-between w-full">
        <Link to="/" className="flex items-center p-4">
          <Logo className="fill-current h-10" />
        </Link>

        <button
          className="flex md:hidden items-center justify-center p-4"
          onClick={() => toggleExpansion(!isExpanded)}
          type="button"
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <nav
        id="nav"
        className={`${
          isExpanded ? `block` : `hidden`
        } md:flex md:flex-1 md:items-center md:justify-end relative w-full md:w-auto`}
      >
        <NavLink link="/" title="Home" />
        <NavLink link="/why" title="Why" />
        <NavLink link="/services" title="Services" />
        <NavLink link="/gift-voucher" title="Gift Voucher" />
        <NavLink link="/contact" title="Contact" />
        <Link
          className="block border-t md:border-none font-light p-4 hover:text-gray-800 text-sm tracking-wide uppercase"
          to="/booking"
        >
          <span className="border border-gray-600 inline-block px-2 py-1">
            Booking
          </span>
        </Link>
      </nav>
    </header>
  );
};

const NavLink = ({ link, title }) => (
  <Link
    to={link}
    className="block border-t md:border-none flex-shrink-0 font-light p-4 hover:text-gray-800 text-sm tracking-wide uppercase"
  >
    {title}
  </Link>
);

NavLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

export default Navbar;
