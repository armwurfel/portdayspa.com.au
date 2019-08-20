import React from 'react';

import Service from '../utils/Service';
import ServicesMenu from '../ServicesMenu';

const IPLSHR = () => {
  return (
    <>
      <ServicesMenu service="IPL/SHR" />
      <div className="px-4">
        <h3 className="font-bold mt-6 uppercase">IPL Skin Rejuvenation</h3>
        <Service title="Skin Tone Correction" price="POA">
          <p>
            Whether born with them or acquired over the course of a lifetime,
            virtually everyone has one or more sun spots, freckles or skin
            discolouration they'd love to get rid of! A doctor's letter
            confirming that no skin cancers are present is usually required
            before commencing your treatment cycles.
          </p>
        </Service>
        <Service title="Rejuvenation Treatment" price="POA">
          <p>
            Everybody loves the sunshine! However, in the long term, sun
            exposure decreases the production of collagen, which in turn causes
            damage to the skin making it feel wrinkled and coarse and looking
            red and tired. Skin rejuvenation treatments will improve skin tone,
            texture, refine and refresh the skin by increasing the production of
            collagen in the skin.
          </p>
        </Service>
        <Service title="Redness Reduction" price="POA">
          <p>
            Our trained clinicians can offer treatments which will reduce facial
            blemishes such as red flushing and red spots found on cheeks and
            around the nose with minimal downtime or risk.
          </p>
        </Service>
        <Service title="Skin Clearing" price="POA">
          <p>
            Our trained clinicians are now able to offer IPL based acne
            management programs. These unique treatments are designed to
            specifically slow the overall production of oil that leads to acne,
            thus dramatically reducing the chance of spots and minimising the
            appearance of pores in general.
          </p>
        </Service>
      </div>
    </>
  );
};

export default IPLSHR;
