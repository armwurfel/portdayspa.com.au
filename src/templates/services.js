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
      <div className="relative">
        <div className="absolute">
          <img className="h-full translate-left-50" src={Background} alt="" />
        </div>
        <div className="flex flex-wrap py-4 relative">
          <ServicesMenu />
          <div className="flex px-12 w-full md:w-2/3">
            <div className="border px-4 py-6 w-full">
              <SelectedService />
              <p className="text-center">
                <Link
                  className="border border-gray-500 inline-block leading-none px-2 py-1 uppercase"
                  to="/booking"
                >
                  Book now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Services.propTypes = {
  pageContext: PropTypes.array,
};

export default Services;
