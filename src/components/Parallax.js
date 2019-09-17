import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { jarallax } from 'jarallax';

const Parallax = ({ children }) => {
    useEffect(() => {
        // jarallax(document.querySelectorAll('.jarallax'), 'destroy');
        console.log("destroy ");
        jarallax(document.querySelectorAll('.jarallax'), {
            onDestroy: function() {
                    window.location.reload();
                console.log("updated");
            }
        });
     });
    // render() {
        return (
            <div data-jarallax data-speed="0.2" className="jarallax">
             {children}
            </div>
        )
    // }
// }
}

Parallax.propTypes = {
  children: PropTypes.node,
};

export default Parallax;
