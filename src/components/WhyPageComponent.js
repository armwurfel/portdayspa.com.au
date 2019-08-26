import React from 'react';

import Background from '../images/background.svg';

const WhyPageComponent = () => {
  return (
    <article
      id="why"
      className="bg-white px-4 md:px-6 py-24 relative w-full z-10"
    >
      <div className="absolute hidden md:block inset-0">
        <img className="translate-left-50" src={Background} alt="" />
      </div>
      <div className="flex flex-wrap max-w-6xl mx-auto relative w-full">
        <div className="w-full md:w-1/3">
          <h2 className="font-semibold font-serif leading-tight md:p-10 text-2xl uppercase w-full">
            <span className="inline-block">Why Choose&nbsp;</span>
            <span className="inline-block">Port Macquarie&nbsp;</span>
            <span className="inline-block">Day Spa?</span>
          </h2>
        </div>
        <div className="md:col-2 w-full md:w-2/3">
          <p className="mt-4 md:mt-0">
            <strong>Our Guarantee</strong> You are completely protected by our
            Guarantee that if you are not completely happy then we will gladly
            redo the service.
          </p>
          <p>
            <strong>Clean!</strong> Your treatment room will always be
            immaculate! You will notice our level of cleanliness. Everything
            that we use to perform your individual treatment that can be
            disposable is. Our premises are inspected regularly by department of
            Health officials, giving you peace of mind.
          </p>
          <p>
            <strong>Tranquility Plus!</strong> We take great care in delivering
            a tranquil environment with soothing music, the ambient glow of
            burning candles and our caring professional therapist. All is
            attuned to provide you with the relaxed atmosphere you deserve.
          </p>
          <p>
            <strong>Convenience</strong> You get the convenience of extended
            trading hours on Thursday evenings, and all day on Saturdays to
            4.00pm just so you can choose when you want to visit.
          </p>
          <p>
            <strong>Privacy!</strong> Your privacy is ensured with floor to
            ceiling walls and special sound proofed doors. Your therapist’s
            confidentiality is of paramount importance.
          </p>
          <p>
            <strong>Consistency</strong> Your treatment will always be performed
            to the same high standard each and every time regardless of whether
            you are our first guest for the day or our last.
          </p>
          <p>
            <strong>Professional Advice &amp; Products</strong> With our
            qualified therapists you will be guaranteed to receive the best
            possible advice for all your beauty and skin needs. Our spa staff
            have undergone professional training to ensure the best possible
            result. <br />
            At Port Macquarie Day Spa we only use professional grade salon
            strength products to guarantee the best outcome for your skin.
          </p>
          <p>
            <strong>Award Winning</strong>
          </p>
          <ul className="list-disc ml-5">
            <li>Finalist Greater Port Macquarie Business Awards 2014</li>
            <li>Winner Organic Spa Best New Spa 2013</li>
            <li>Finalist Greater Port Macquarie Business Awards 2013</li>
            <li>Finalist Greater Port Macquarie Business Awards 2012</li>
            <li>Winner Greater Port Macquarie Business Awards 2011</li>
            <li>Winner Greater Port Macquarie Business Awards 2010</li>
          </ul>
          <p className="mt-4">
            <strong>Our friendly staff</strong> You will be delighted with the
            friendliness of our staff – they are always approachable and always
            professional.
            <br />
            So if you are looking for a new spa or even if you haven’t visited
            us for a while NOW is the time for you to make Port Macquarie Day
            Spa your choice, for the things that you find important.
            <br />
            Chances are we have you covered. We look forward to meeting you or
            welcoming you back again soon.
          </p>
        </div>
      </div>
    </article>
  );
};

export default WhyPageComponent;
