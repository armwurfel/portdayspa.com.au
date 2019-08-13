import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Service from './utils/Service';
import Background from '../images/background.svg';

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="relative">
      <div className="absolute">
        <img className="h-full translate-left-50" src={Background} alt="" />
      </div>
      <div className="bg-cover flex flex-wrap py-4 relative">
        <div className="font-semibold font-serif leading-tight px-12 py-6 text-2xl uppercase w-full md:w-1/3">
          <h1>{data.site.siteMetadata.title} Services Menu</h1>
          <ul className="list-dash ml-5 mt-4">
            <li>
              <Link
                to="/services/skin"
                activeClassName="underline"
                partiallyActive
              >
                Skin
              </Link>
            </li>
            <li>
              <Link
                to="/services/body"
                activeClassName="underline"
                partiallyActive
              >
                Body
              </Link>
            </li>
            <li>
              <Link
                to="/services/beauty"
                activeClassName="underline"
                partiallyActive
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                to="/services/ipl-srh"
                activeClassName="underline"
                partiallyActive
              >
                IPL/SRH
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-12 w-2/3">
          <div className="border px-4 py-6">
            <div className="flex font-serif justify-between leading-tight uppercase">
              <h2>Skin</h2>
              <div>Price</div>
            </div>
            <Service
              title="Skin Consultation*"
              price={[
                <p>$50*</p>,
                <p className="mt-0">
                  <small>*This cost is redeemable on products/treatments</small>
                </p>,
              ]}
            >
              Our comprehensive Consultation process is designed to help you
              create a customised treatment and homecare plan, allowing you to
              address your skin concerns and reveal your best ever skin.
            </Service>
            <h3 className="font-bold mt-6 uppercase">Signature Facials</h3>
            <Service title="Multi – Detox" price="$179 (90 mins)">
              Revitalise, clarify, cleanse. The high potency multi-clay mask,
              with kaolin & bentonite, is formulated to promote cell renewal,
              detoxify and calm normal, combination and oily skin types. The
              blend of active ingredients will ensure your skin reclaims a
              healthy glow.
            </Service>
            <Service title="Age Delay" price="$170 (90 mins)">
              An intensive illumination treatment that provides a powerful dose
              of antioxidants and hydration. Skin is visibly firmer with a
              smoother texture and tone. Sonophoresis combined with active
              ingredients ensures deep penetration of products to target the
              signs of ageing, dehydrated skin, photo damage, pigmentation and
              poor skin texture.
            </Service>
            <Service title="Revitalising" price="$170 (90 mins)">
              An intensive, revitalising cosmedical skincare treatment designed
              to deep cleanse, decongest and replenish tired skin. Sonophoresis
              will further penetrate active ingredients.
            </Service>
            <Service title="Ultra Calming" price="$170 (90 mins)">
              A gentle, calming treatment that will hydrate, calm and visibly
              reduce redness. This treatment combines lymphatic drainage through
              the use of smooth microdermabrasion tip. Great for rosacea or
              inflammatory skins.
            </Service>
            <Service title="Bio Hydra" price="$149 (45 mins)">
              A treatment to stimulate the production of collagen & elastin,
              restore moisture loss and provide clarity to the skin. This
              gorgeous facial contains a unique formula of plant extracts and
              hydraluronic acid to bind and lock in moisture.
            </Service>
            <Service
              title="PDS Customised Signature Facial"
              price="$49 (45 mins)"
            >
              This relaxing facial is customised to your skins individual
              requirements. It includes deep cleanse, thorough exfoliation,
              relaxing facial massage, customised mask, active customised
              serums, moisture protectives and
            </Service>
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
  );
};

export default Services;
