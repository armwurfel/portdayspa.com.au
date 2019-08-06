import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';
import SocialWidgetDesktop from './SocialWidgetDesktop';
import SocialWidgetMobile from './SocialWidgetMobile';

const Layout = ({ children }) => (
  <div className="antialiased flex flex-col font-sans leading-relaxed min-h-screen text-gray-700">
    <Navbar />
    <main className="bg-white flex flex-1 flex-col mx-auto w-full">
      {children}
    </main>
    <Footer />
    <Media query="(min-width: 768px)">
      {matches => (matches ? <SocialWidgetDesktop /> : <SocialWidgetMobile />)}
    </Media>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
