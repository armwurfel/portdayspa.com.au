import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Skin from '../components/Services/Skin';
import Body from '../components/Services/Body';
import Beauty from '../components/Services/Beauty';
import IPLSRH from '../components/Services/IPL-SRH';
import Map from '../components/Map';
import Background from '../images/background.svg';

const Services = ({ pageContext }) => {
  function SelectedService() {
    if (pageContext.slug === `skin`) {
      return <Skin />;
    }
    if (pageContext.slug === `body`) {
      return <Body />;
    }
    if (pageContext.slug === `beauty`) {
      return <Beauty />;
    }
    if (pageContext.slug === `ipl-srh`) {
      return <IPLSRH />;
    }
    return <Skin />;
  }

  return (
    <Layout>
      <SEO title={pageContext.title} />
      <div className="max-w-6xl mx-auto relative w-full">
        <div className="absolute hidden md:block inset-0">
          <img className="translate-left-50" src={Background} alt="" />
        </div>
        <div className="flex flex-wrap py-12 relative">
          <div className="flex flex-wrap ml-auto px-4 md:px-12 w-full md:w-2/3">
            <div className="bg-white border w-full">
              <SelectedService />
              <p className="my-6 text-center">
                <a
                  className="border border-gray-500 inline-block leading-none px-2 py-1 uppercase transition-all hover:bg-gray-800 hover:text-white hover:border-gray-800"
                  href="https://phorest.com/book/salons/portmacquariedayspa"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Book now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </Layout>
  );
};

Services.propTypes = {
  pageContext: PropTypes.object,
};

export default Services;
