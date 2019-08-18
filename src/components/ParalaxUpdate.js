import React, { useEffect } from 'react';
import { withController } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

const ParalaxUpdate = ({ children, parallaxController, location }) => {
  useEffect(parallaxController.update, [parallaxController, location]);
  return <>{children}</>;
};

ParalaxUpdate.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  parallaxController: PropTypes.object,
};

export default withController(ParalaxUpdate);
