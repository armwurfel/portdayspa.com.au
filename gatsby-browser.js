/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
require('./src/css/tailwind.css');
require('typeface-raleway');

const React = require('react');
// const propTypes = require('prop-types');
const { ParallaxProvider } = require('react-scroll-parallax');

// Self host fonts using Typefaces.js https://github.com/KyleAMathews/typefaces

exports.wrapRootElement = (apiCallbackContext, pluginOptions) => {
  const { element } = apiCallbackContext;

  return <ParallaxProvider>{element}</ParallaxProvider>;
};

exports.wrapRootElement.displayName = 'wrapRootElement';
