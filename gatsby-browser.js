/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Load CSS from Tailwind
import './src/css/tailwind.css';

// Self host fonts using Typefaces.js https://github.com/KyleAMathews/typefaces
import 'typeface-raleway';

// Wrap root element in ParallaxProvider
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

export const wrapRootElement = ({ element }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.object,
};
