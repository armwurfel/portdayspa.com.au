import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServicesMenu from '../components/ServicesMenu';
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
        <div className="absolute inset-0">
          <img className="translate-left-50" src={Background} alt="" />
        </div>
        <div className="flex flex-wrap py-12 relative">
          <ServicesMenu />
          <div className="flex px-12 w-full md:w-2/3">
            <div className="bg-white border px-4 py-6 w-full">
              <SelectedService />
              <p className="mt-6 text-center">
                <Link
                  className="border border-gray-500 inline-block leading-none px-2 py-1 uppercase transition-all hover:bg-gray-800 hover:text-white hover:border-gray-800"
                  to="/booking"
                >
                  Book now
                </Link>
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
