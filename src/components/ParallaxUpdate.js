import React, { useEffect } from 'react';
import { withController } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

const ParallaxUpdate = ({ children, parallaxController, location }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      parallaxController.update();
    }
  }, [parallaxController, location]);
  return <>{children}</>;
};

ParallaxUpdate.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  parallaxController: PropTypes.object,
};

export default withController(ParallaxUpdate);
