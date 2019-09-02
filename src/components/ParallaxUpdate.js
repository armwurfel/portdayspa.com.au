import { withController } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

const ParallaxUpdate = ({ parallaxController }) => {
  parallaxController.update();
};

ParallaxUpdate.propTypes = {
  children: PropTypes.any,
  parallaxController: PropTypes.object,
};

export default withController(ParallaxUpdate);
