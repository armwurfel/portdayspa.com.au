import React from 'react';
import { withController } from 'react-scroll-parallax';
import Image from 'gatsby-image';

class ContactImg extends React.Component {
    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    };
 
    render() {
        return(
            <Image
                onLoad={this.handleLoad}
                className="w-full"
                style={{ minHeight: `30rem`, height: `100%`, maxHeight: `50rem` }}
                fluid={this.props.fluid}
                loading="eager"
            />
        );
    }
}
 
export default withController(ContactImg);