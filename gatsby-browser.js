/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Load CSS from Tailwind
require('./src/css/tailwind.css');

// Self host fonts using Typefaces.js https://github.com/KyleAMathews/typefaces
require('typeface-raleway');

// // Wrap root element in ParallaxProvider
// const React = require('react');
// const { ParallaxProvider } = require('react-scroll-parallax');
// const PropTypes = require('prop-types');

// exports.wrapRootElement = ({ element }) => {
//   return <ParallaxProvider>{element}</ParallaxProvider>;
// };

// exports.wrapRootElement.propTypes = {
//   element: PropTypes.object,
// };
