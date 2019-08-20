import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Service from '../utils/Service';
import ServicesMenu from '../ServicesMenu';

const IPLSHR = () => {
  const data = useStaticQuery(graphql`
    query IPLSHRQuery {
      site {
        siteMetadata {
          phone
          phoneFormatted
        }
      }
    }
  `);
  const { phone, phoneFormatted } = data.site.siteMetadata;
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
        <h3 className="font-bold mt-6 uppercase">
          SuperLUX SHR IPL Permanent Hair Removal
        </h3>
        <p>
          Constant waxing and plucking doesn't have to be part of your schedule
          anymore. The SuperLUX provides exceptional hair removal through
          non-invasive light technology so you can spend more time enjoying
          life!
        </p>
        <p className="mt-2">We're bringing outstanding hair removal results!</p>
        <p className="mt-2">
          <strong>
            Experience the new generation of professional hair removal. No mess.
            No fuss. No pain. Just gorgeous results that last the distance.
          </strong>
        </p>
        <h4 className="font-bold mt-6">What is Super Hair Removal (SHR)?</h4>
        <p>
          Laser and IPL hair removal is undoubtedly the most effective way to
          remove unwanted hair for the long run. But if the thought of pain or
          discomfort has been keeping you away, LUX Series SHR is for you. LUX
          Series SHR gradually heats the hair follicle with repetitive low
          fluence pulses until the hair follicle is destroyed instead of a
          single high-heat, high-energy pulse that many other lasers and IPL
          use.
        </p>
        <h4 className="font-bold mt-6">The results?</h4>
        <p>
          Long lasting hair removal with virtually no pain,discomfort or
          irritation during and after your treatment. Just easy-breezy sessions
          and full-body confidence all year round!
        </p>
        <p className="mt-2">5 reasons to treat yourself with LUX Series SHR:</p>
        <ul className="list-disc ml-5">
          <li>Remove unwanted hair from anywhere on your body</li>
          <li>Rapid session time means you’re in and out in a flash</li>
          <li>Experience pain-free treatments and minimal skin irritation</li>
          <li>Never buy razors, shaving creams and waxes again</li>
          <li>
            Enjoy the convenience and confidence of hair-free skin every day.
          </li>
        </ul>
        <p className="mt-2">
          Our highly trained staff will design a hair removal treatment plan
          specifically for you, so you can achieve optimum results!
        </p>
        <p className="mt-2">
          Call{' '}
          <a className="font-bold hover:text-gray-600" href={`tel:${phone}`}>
            {phoneFormatted}
          </a>{' '}
          to book a consultation with our skilled consultants today!
        </p>
      </div>
    </>
  );
};

export default IPLSHR;
