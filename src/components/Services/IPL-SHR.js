import React from 'react';

import Service from '../utils/Service';
import ServicesMenu from '../ServicesMenu';

const IPLSHR = () => {
  return (
    <>
      <ServicesMenu service="IPL/SHR" />
      <div className="px-4">
        <Service title="Skin Consultation*" price={[<p>$50*</p>]}>
          Our comprehensive Consultation process is designed to help you create
          a customised treatment and homecare plan, allowing you to address your
          skin concerns and reveal your best ever skin.
          <p className="mt-0">
            <small>*This cost is redeemable on products/treatments</small>
          </p>
        </Service>
      </div>
    </>
  );
};

export default IPLSHR;
