import React from 'react';

import Service from '../utils/Service';
import ServicesMenu from '../ServicesMenu';

const Body = () => {
  return (
    <>
      <ServicesMenu service="Body" />
      <div className="px-4">
        <h3 className="font-bold mt-6 uppercase">Body treatments</h3>
        <p>
          Help relieve your body of modern dat pollutants, stress and lack of
          focus by indulging in a body treatment.
        </p>
        <Service title="Warm Oil Wrap" price="$132*" time="75 mins">
          This delicious treatment begins with a full body coconut sugar scrub,
          followed by a hydrating wrap utilising exotic oils combined with
          luxurious body butter to leave skin feeling soft and smooth.
          <p className="mt-0">
            <small>*With 60 mins renewal massage: $220</small>
          </p>
        </Service>
        <Service title="Sugar Glow" price="$94" time="45 mins">
          Full body exfoliation using a coconut sugar scrub designed to gently
          buff and rehydrate. Leave skin feeling soft and smooth with a lather
          of nourishing body butter.
        </Service>
        <h3 className="font-bold mt-6 uppercase">Massage</h3>
        <p>
          Bring body, mind and spirit into a state of relaxation where healing
          begins. For maximum benefits a course of massage is recommended.{' '}
          <br />
          <strong>Ask about our massage packages and payment plans.</strong>
        </p>
        <Service title="Renewal Massage" price="$149*" time="90 mins">
          Smooth flowing massage to help reduce stress, improve circulation
          &amp; provide deep relaxation to recharge &amp; rejuvenate.
          <p className="mt-0">
            <small>*60 mins - $99, 30 mins - $75</small>
          </p>
        </Service>
        <Service
          title="Remedial Massage (Health Fund Accredited)"
          price="$149*"
          time="90 mins"
        >
          For the treatment of muscles, tendons, ligaments and connective
          tissues of the body to assist in rehabilitation, pain and injury
          management.
          <p className="mt-0">
            <small>*45 mins - $87, 30 mins - $75</small>
          </p>
        </Service>
        <Service title="Aromatherapy" price="$149*" time="90 mins">
          A relaxing &amp; healing massage utilising essential oils.
          <p className="mt-0">
            <small>*60 mins - $99, 30 mins - $75</small>
          </p>
        </Service>
        <Service title="Pregnancy Massage" price="$99*" time="60 mins">
          Bringing a new life into the world is an amazing experience, though
          the 9 month pregnancy can be challenging and stressful on the body.
          Through the use of our pregnancy pillow, specially designed to enable
          you to lay comfortably on your stomach, we will relive any aches and
          pains, transporting you to a state of pure bliss. <br />
          <strong>
            We recommend avoiding massage during your 1st trimester.
          </strong>
          <p className="mt-0">
            <small>*45 mins - $87, 30 mins - $75</small>
          </p>
        </Service>
        <Service title="Hot Stone Massage" price="$186" time="90 mins">
          Using hot stones in combination with massage techniques to bring about
          a feeling of deep relaxation &amp; well being.
          <p className="mt-0">
            <small>*60 mins - $139, 30 mins - $89</small>
          </p>
        </Service>
        <h3 className="font-bold mt-6 uppercase">Hands &amp; Feet</h3>
        <p>
          Treat your fingers &amp; toes with luxurious manicures &amp;
          pedicures.
        </p>
        <Service title="Deluxe Spa Pedicure" price="$82" time="60 mins">
          Soak away tension with a coconut milk foot soak, nails will be filed
          and shaped to your liking, cuticle care, heels buffed, sugar scrub to
          smooth, delicious body butter mask and massage. Complete with polish
          colour of your choice.
        </Service>
        <Service title="Deluxe Spa Manicure" price="$77" time="60 mins">
          Nails will be filed and shaped to your liking, cuticle care, sugar
          scrub to smooth, delicious body butter mask and massage. Complete with
          polish colour of your choice.
        </Service>
        <Service title="Express Pedicure" price="$59" time="30 mins">
          Beginning with a coconut milk foot soak, we will cut and file your
          nails to the desired shape, tidy cuticles, buff heels, moisturise and
          finish off with a polish colour of your choice.
        </Service>
        <Service title="Express Manicure" price="$49" time="30 mins">
          For a quick fix or maintenance treatment. We will cut and file your
          nails to the desired shape, tidy cuticles, moisturise and finish off
          with a polish colour of your choice.
        </Service>
        <Service title="Shellac Application" price="$49" time="30 mins">
          The original power polish services! Instantly dry with high shine, up
          to 14 day wear with no nail damage.
        </Service>
        <Service title="Coconut Sugar Foot Treat" price="$32" time="15 mins">
          A delicious treat just for the feet! Ease away tension with a coconut
          milk foot soak, polish the feet with a coconut sugar foot scrub and
          finish off with hydrating body butter. Add to any treatment or enjoy
          on it’s own.
        </Service>
        <Service title="Shellac Removal" price="$20" time="30 mins">
          Using a nourishing solution containing macadamia nut oil and vitamin
          E, we will safely remove your Shellac without causing any damage or
          dehydration to your nails.
        </Service>
        <Service title="Shellac Upgrade" price="$29" time="15 mins">
          Add Shellac to any of our deluxe manicures or pedicures.
        </Service>
        <Service title="Paraffin Upgrade" price="$29" time="15 mins">
          Add Paraffin to the above treatments.
        </Service>
      </div>
    </>
  );
};

export default Body;
