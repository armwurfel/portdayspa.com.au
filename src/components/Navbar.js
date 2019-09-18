import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Logo from './Logo';

const Navbar = ({ home }) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header
      className={`${
        home ? `sm:mt-16 ` : ``
      }bg-white leading-none lg:px-10 relative sticky top-0 w-full z-40`}
    >
      <div className="lg:flex items-center max-w-6xl mx-auto py-4 w-full">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center p-4">
            <Logo className="fill-current h-10" />
          </Link>

          <button
            className="flex lg:hidden items-center justify-center p-4"
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
          } lg:flex lg:flex-1 lg:items-center lg:justify-end relative w-full lg:w-auto`}
        >
          <NavLink link="/" title="Home" />
          <NavLink link="/why" title="Why" />
          <NavLink link="/services" title="Services" />
          <NavLink link="/gift-voucher" title="Gift Voucher" />
          <a
            className="block border-t lg:border-none flex-shrink-0 font-light p-4 hover:text-gray-800 text-sm tracking-wide uppercase"
            href="http://www.ultraceuticals.com/au/index.php/shopnow/?ref=portm123"
            rel="noopener noreferrer"
            target="_blank"
          >
            Shop Online
          </a>
          <NavLink link="/contact" title="Contact" />
          <a
            className="block border-t lg:border-none font-light p-4 text-sm tracking-wide uppercase"
            href="https://phorest.com/book/salons/portmacquariedayspa"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="border border-gray-500 inline-block px-2 py-1 transition-all hover:bg-gray-800 hover:text-white hover:border-gray-800">
              Booking
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  home: PropTypes.bool,
};

export default Navbar;

const NavLink = ({ link, title }) => (
  <Link
    to={link}
    className="block border-t lg:border-none flex-shrink-0 font-light p-4 hover:text-gray-800 text-sm tracking-wide uppercase"
  >
    {title}
  </Link>
);

NavLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};
