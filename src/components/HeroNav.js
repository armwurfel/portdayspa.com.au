import React from 'react';
import { Link } from 'gatsby';

const HeroNav = () => {
  return (
    <div className="absolute hidden md:block font-light inset-x-0 font-sans leading-none p-4 text-gray-700 hover:text-gray-800 uppercase -mx-3 text-sm top-0 tracking-wide w-full z-10">
      <Link className="inline-block mx-3" to="/">
        Home
      </Link>
      <Link className="inline-block mx-3" to="/why">
        Why
      </Link>
      <Link className="inline-block mx-3" to="/services">
        Services
      </Link>
      <Link className="inline-block mx-3" to="/gift-voucher">
        Gift Voucher
      </Link>
      <Link className="inline-block mx-3" to="/contact">
        Contact
      </Link>
      <a
        className="border border-gray-500 inline-block mx-3 px-2 py-1 transition-all hover:bg-gray-800 hover:text-white hover:border-gray-800"
        href="https://phorest.com/book/salons/portmacquariedayspa"
        rel="noopener noreferrer"
        target="_blank"
      >
        Booking
      </a>
    </div>
  );
};

export default HeroNav;
