import React from 'react';

import Service from '../utils/Service';
import ServicesMenu from '../ServicesMenu';

const Skin = () => {
  return (
    <>
      <ServicesMenu service="Skin" />
      <div className="px-4">
        <Service title="Ultra Skin Consultation" price="$50*" time="30 mins">
          <p>
            Our comprehensive ULTRA Consultation process is designed to help you
            create a customised treatment and homecare plan, allowing you to
            address your skin concerns and reveal your best ever skin.
          </p>
          <p className="mt-0">
            <small>*This cost is redeemable on products/treatments.</small>
          </p>
        </Service>
        <h3 className="font-bold mt-6 uppercase">
          Ultraceuticals Signature Facials
        </h3>
        <p>
          Ultraceuticals luxurious signature facial treatments incorporate
          potent active ingredients, UltraSonophoresis and massage to treat key
          skin concerns including premature skin ageing, pigmentation/uneven
          skin tone, dehydration and congested skin.
        </p>
        <Service title="Vita-CLEAR Facial" price="$150*" time="60 mins">
          <p>
            This deep cleansing treatment incorporated BHA and potent
            antioxidants to penetrate deep into the pores to clear congestion.
            Works to calm inflamed skin, help control excessive oiliness,
            mattify the complexion and minimise future skin breakouts.
          </p>
          <p className="mt-0">
            <small>*45 mins - $115, 30 mins - $80</small>
          </p>
        </Service>
        <Service title="Vita-REPAIR Facial" price="$150*" time="60 mins">
          <p>
            Works to repair stressed and dehydrated skin, this essential
            moisture boost treatment balances and restores skin's natural
            hydration levels. Features Ultraceuticals' Vitamin B2 moisturising
            complex (Provitamin B5 and Vitamin B3) to visibly nourish skin and
            plump fine lines and wrinkles.
          </p>
          <p className="mt-0">
            <small>*45 mins - $115, 30 mins - $80</small>
          </p>
        </Service>
        <Service title="Vita-GLOW Facial" price="$150*" time="60 mins">
          <p>
            This multi-action facial visibly reduces the appearance of
            pigmentation, uneven skin tone and dark spots. A powerful
            combination of 5 hyperpigment blockers, skin brighteners and
            exfoliants to synergistically restore skin luminosity and radiance.
          </p>
          <p className="mt-0">
            <small>*45 mins - $115, 30 mins - $80</small>
          </p>
        </Service>
        <Service title="Vita-LIFT ACE Power Facial" price="$150" time="60 mins">
          <p>
            Featuring our triple-action anti-ageing powerhouse ingredients
            Vitamin A, Vitamin C and AHAs &amp; BHA, this treatment combines
            pure indulgence with skin rejuvenation. Actively works to reverse
            the visible signs of ageing by perfecting and refining the skins
            overall appearance.
          </p>
        </Service>
        <h3 className="font-bold mt-6 uppercase">
          Ultraceuticals Skin Workouts
        </h3>
        <p>
          Skin Workout treatments (often referred to as skin peels) aim to
          rejuvenate skin through accelerated exfoliation. These treatments have
          been developed to quickly refresh and restore skins youthful
          appearance.
        </p>
        <Service title="Vita-CLEAR Skin Workout" price="$95*" time="30 mins">
          <p>
            This Mandelic Acid Peel utilises AHAs to quickly decongest, clarify
            and help control oil production. With proven anti-ageing ingredient
            Niacinamide and potent antioxidant Clove Oil, this peel improves
            surface congestion and reduces inflammation.
          </p>
          <p className="mt-0">
            <small>*45 mins + Infusion $130</small>
          </p>
        </Service>
        <Service title="Vita-REPAIR Skin Workout" price="$90*" time="30 mins">
          <p>
            Reveal refreshed, youthful, radiant skin in just one treatment. This
            high-powered Lactic Acid peel delivers fast results and actively
            works to resurface and improve skins moisture levels while restoring
            clarity and luminosity.
          </p>
          <p className="mt-0">
            <small>*45 mins + Infusion $125</small>
          </p>
        </Service>
        <Service title="Vita-GLOW Skin Workout" price="$100*" time="30 mins">
          <p>
            Ideal treatment for ageing or sun damaged skin, this potent Vitapeel
            features high-strength AHAs &amp; BHA. This skin brightening
            treatment works to rapidly exfoliate surface congestion while
            diminishing the appearance of dark spots, hyperpigmentation and
            blotchiness to reveal a brighter and clearer complexion.
          </p>
          <p className="mt-0">
            <small>*45 mins + Infusion $125</small>
          </p>
        </Service>
        <Service title="A-Zyme Skin Workout" price="$165*" time="30 mins">
          <p>
            The powerhouse of all anti-ageing treatments. This fast-acting non
            invasive skin rejuevenation treatment combines proven anti-ageing
            ingredients Retinol and Bromelain to refresh, refine, hydrate and
            plump skin. Works quickly, to dramatically diminish the appearance
            of fine lines and wrinkles, even skin tone, and improve overall skin
            luminosity.
          </p>
          <p className="mt-0">
            <small>*45 mins + Infusion $200</small>
          </p>
        </Service>
        <Service
          title="Radiance Renew Skin Workout"
          price="$160"
          time="60 mins"
        >
          <p>
            This ultimate 3-1 skin workout treatment is designed to refine
            pores, smooth coarse texture and help renew skins’ dewy youthful
            glow. This powerful treatment combines Mandelic Acid and our
            radiance boosting mask followed by an AHA, BHA infusion to help
            smooth and restore overall skin luminosity. A series of at least 3
            treatments are recommended for optimum results.
          </p>
        </Service>
        <h3 className="font-bold mt-6 uppercase">
          Ultraceuticals Paramedical Treatments
        </h3>
        <p>
          Performed by highly trained clinicians these treatments provide
          remarkable regenerative effects on the skin and allow for maximum
          results.
        </p>
        <Service title="Vita-Brasion Treatment" price="$150" time="45 mins">
          <p>
            Total skin treatment incorporating deep exfoliation and Vitamin
            infusion (UltraSonophoresis) of potent anti-ageing and antioxidant
            Vitamin A &amp; C to refine, smooth plump the complexion.
          </p>
        </Service>
        <Service title="Hydro-Brasion" price="$175" time="45 mins">
          <p>
            Simultaneously incorporates skin resurfacing and Vitamin infusion
            technology (Ultrasonophoresis) to deliver potent ant-ageing
            ingredients to help smooth, plump and boost skin’s hydration levels.
          </p>
        </Service>
        <Service title="Radiance Plus+" price="$120" time="30 mins">
          <p>
            This radiance-boosting mask combines a powerful blend of 8 skin
            brightening agents to rapidly reduce the appearance of
            hyperpigmentation, dark spots and blotchiness to instantly reveal
            luminous complexion.
          </p>
        </Service>
        <Service title="Skin Needling (Face)" price="$359">
          <p>
            Utilises Direct Needle Therapy (DNT) to rejuvenate the skin’s
            youthful appearance. This powerful treatment works to quickly
            rejuvenate the skin by maintaining healthy levels of collagen and
            elastin and helps to visibly reduce the appearance fine lines &
            wrinkles, coarse texture and dull skin tone.
          </p>
        </Service>
      </div>
    </>
  );
};

export default Skin;
