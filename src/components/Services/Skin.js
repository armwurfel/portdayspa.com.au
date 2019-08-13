import React from 'react';

import Service from '../utils/Service';

const Skin = () => {
  return (
    <>
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
        Our comprehensive Consultation process is designed to help you create a
        customised treatment and homecare plan, allowing you to address your
        skin concerns and reveal your best ever skin.
      </Service>
      <h3 className="font-bold mt-6 uppercase">Signature Facials</h3>
      <Service title="Multi – Detox" price="$179 (90 mins)">
        Revitalise, clarify, cleanse. The high potency multi-clay mask, with
        kaolin & bentonite, is formulated to promote cell renewal, detoxify and
        calm normal, combination and oily skin types. The blend of active
        ingredients will ensure your skin reclaims a healthy glow.
      </Service>
      <Service title="Age Delay" price="$170 (90 mins)">
        An intensive illumination treatment that provides a powerful dose of
        antioxidants and hydration. Skin is visibly firmer with a smoother
        texture and tone. Sonophoresis combined with active ingredients ensures
        deep penetration of products to target the signs of ageing, dehydrated
        skin, photo damage, pigmentation and poor skin texture.
      </Service>
      <Service title="Revitalising" price="$170 (90 mins)">
        An intensive, revitalising cosmedical skincare treatment designed to
        deep cleanse, decongest and replenish tired skin. Sonophoresis will
        further penetrate active ingredients.
      </Service>
      <Service title="Ultra Calming" price="$170 (90 mins)">
        A gentle, calming treatment that will hydrate, calm and visibly reduce
        redness. This treatment combines lymphatic drainage through the use of
        smooth microdermabrasion tip. Great for rosacea or inflammatory skins.
      </Service>
      <Service title="Bio Hydra" price="$149 (45 mins)">
        A treatment to stimulate the production of collagen & elastin, restore
        moisture loss and provide clarity to the skin. This gorgeous facial
        contains a unique formula of plant extracts and hydraluronic acid to
        bind and lock in moisture.
      </Service>
      <Service title="PDS Customised Signature Facial" price="$49 (45 mins)">
        This relaxing facial is customised to your skins individual
        requirements. It includes deep cleanse, thorough exfoliation, relaxing
        facial massage, customised mask, active customised serums, moisture
        protectives and
      </Service>
    </>
  );
};

export default Skin;
