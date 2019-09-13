import React, { Component } from 'react';
import { withController } from 'react-scroll-parallax';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

class ContactImg extends Component {
  static propTypes = {
    parallaxController: PropTypes.object,
    fluid: PropTypes.object,
  };

  handleLoad = () => {
    const { parallaxController } = this.props;
    parallaxController.update();
    console.log('Parallax Scroll Updated');
  };

  render() {
    const { fluid } = this.props;
    return (
      <Image
        onLoad={this.handleLoad}
        fluid={fluid}
        loading="eager"
        className="w-full"
        style={{ minHeight: '30rem', height: '100%', maxHeight: '50rem' }}
      />
    );
  }
}

export default withController(ContactImg);
