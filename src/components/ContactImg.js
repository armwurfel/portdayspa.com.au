import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { withController } from 'react-scroll-parallax';

const ContactImg = ({ parallaxController, fluid }) => {
  const handleLoad = () => {
    // updates cached values after image dimensions have loaded
    parallaxController.update();
  };

  return (
    <Image
      onLoad={() => handleLoad}
      className="w-full"
      style={{ minHeight: `30rem`, height: `100%`, maxHeight: `50rem` }}
      fluid={fluid}
      loading="eager"
    />
  );
};

ContactImg.propTypes = {
  parallaxController: PropTypes.object,
  fluid: PropTypes.object,
};

export default withController(ContactImg);
