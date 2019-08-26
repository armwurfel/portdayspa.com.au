import React from 'react';
import { Link } from 'gatsby';

import Service from '../utils/Service';
import ServicesMenu from '../ServicesMenu';

const Skin = () => {
  return (
    <>
      <ServicesMenu service="Spa Packages" />
      <div className="mt-6 px-4">
        <p>
          Indulge with our signature spa packages designed to relax, restore and
          re-energise. Enjoy on your own or share our double treatment room with
          a friend or loved one.
        </p>
        <p className="mt-2">
          <strong>Can’t find a package that suits?</strong> We are happy to
          combine different treatments.
        </p>
        <Service
          title="Couples Indulgence"
          price={[`$389 `, <br />, <small>(per couple)</small>]}
          time="2 hrs"
        >
          <p>
            Relax together in our luxury couples room beginning with a coconut
            milk bath soak. You will enjoy refreshment of choice, delicious
            gourmet chocolates and fresh seasonal fruit followed by a 60 minute
            renewal massage. Skin will be repaired with a replenishing facial
            and tension relieved with a spine tingling scalp massage.
          </p>
        </Service>
        <Service title="Rejuvenation" price="$469" time="4 hrs 30 mins">
          <p>
            Your perfect day spa indulgence will begin with a smoothing sugar
            scrub followed by a soak in our hydrotherapy spa where you will
            enjoy seasonal fruit, gourmet chocolates and your choice of
            refreshment. Next soothe tired muscles with a 60min Hot Stone
            massage followed by a replenishing 60min Facial including eye
            treatment and spine tingling scalp massage. Enjoy a delicious
            antipasto cheese platter and let us treat your feet with a deluxe
            spa pedicure. Your skin will be left glowing with a light
            application of our Jane Iredale skincare makeup.
          </p>
        </Service>
        <Service title="Tranquility" price="$249" time="2 hrs 15 mins">
          <p>
            Allow us to transport you to tranquility with exotic scents and warm
            stones. Aches and pains will be soothed as we massage your body with
            smooth, flat heated stones. Skin will feel replenished and nourished
            with a 60min facial then a treat just for the feet with a coconut
            sugar foot soak.
          </p>
        </Service>
        <Service title="Serenity" price="$269" time="3 hrs">
          <p>
            This beautiful spa escape begins with a 60min renewal massage to
            sooth and relax. Skin is left glowing after a replenishing facial,
            then to complete, pamper your toes with a deluxe spa pedicure.
          </p>
        </Service>
        <Service title="Heavenly" price="$219" time="1 hr 45 mins">
          <p>
            Smooth your skin with a Coconut Sugar Body Exfoliation then drift
            away in a coconut milk hydrotherapy spa with champagne, gourmet
            chocolates and seasonal fruit. A full body massage and de-stressing
            scalp massage will then provide you with new energy & vitality.
          </p>
        </Service>
        <Service title="Perfection" price="$189" time="1 hr 30 mins">
          <p>
            Let us relieve tension from your back, neck and shoulders with a
            renewal massage, next you’ll be taken into a deep state of
            relaxation with a hydrating facial including divine scalp massage.
            Then sit back with refreshment of choice and treat those toes with
            an express pedicure and your choice of polish colour.
          </p>
        </Service>
        <Service title="Mum to Be" price="$169" time="1 hr 45 mins">
          <p>
            The perfect pamper package for the expecting mum. Let us rejuvenate
            the skin with a luxurious facial including décolletage, neck,
            shoulders and scalp massage. Then pamper tired feet with a relaxing
            pedicure.
          </p>
        </Service>
        <Service title="Mankind" price="$149" time="1 hr 30 mins">
          <p>
            Enjoy a revitalising soak in our hydrotherapy spa followed by a
            renewal massage to soothe away any aches and pains, then finish with
            a relaxing warm oil scalp massage.
          </p>
        </Service>
        <h3 className="font-bold mt-6 uppercase">Package Extras</h3>
        <p>
          Ask about our group packages. Perfect for a hens weekend or girls get
          together! Includes spa cheese platter and champagne.
        </p>
        <p className="mt-4">
          <Link
            to="/information-and-conditions"
            className="font-bold hover:underline"
          >
            Click here to view our Spa Information &amp; Conditions
          </Link>
        </p>
      </div>
    </>
  );
};

export default Skin;
