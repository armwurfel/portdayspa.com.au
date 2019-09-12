import React from 'react';
import { withController } from 'react-scroll-parallax';
import Image from 'gatsby-image'; 

class ContactImg extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount = () => {
        // this.handleLoad();
    };

    handleLoad = () => {
        this.props.parallaxController.update();
        console.log('Parallax Scroll Updated');
    };

    render() {
        return (
            <Image
                onLoad={this.handleLoad}
                className="w-full"
                style={{ minHeight: '30rem', height: '100%', maxHeight: '50rem' }}
                fluid={this.props.fluid}
                loading="eager"
            />
        );
    }
} export default withController(ContactImg);