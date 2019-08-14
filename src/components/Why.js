import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Why = () => {
  const data = useStaticQuery(graphql`
    query WhyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <article
      id="why"
      className="bg-white px-4 md:px-6 py-24 relative w-full z-10"
    >
      <div className="flex flex-wrap max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-center w-full md:w-1/3">
          <h2 className="font-semibold font-serif leading-tight md:p-10 text-2xl uppercase w-full">
            Why Choose <br />
            {data.site.siteMetadata.title}?
          </h2>
        </div>
        <div className="md:col-2 w-full md:w-2/3">
          <p className="mt-4 md:mt-0">
            <strong>Where relaxation and results meet.</strong> Escape reality
            and restore inner peace in our tranquil environment. Our treatment
            rooms are beautifully presented with heated beds, tranquil lighting
            and soothing sounds. Indulge with a loved one or friend in our
            double treatment room also containing a relaxation spa.
          </p>
          <p>
            <strong>Professional Advice &amp; Products.</strong> With our
            qualified therapists you will be guaranteed to receive the best
            possible advice for all your beauty and skin needs. Our spa staff
            have undergone professional training to ensure the best possible
            result. At Port Macquarie Day Spa we only use professional grade
            salon strength products to guarantee the best outcome for your skin.
          </p>
          <p>
            <strong>Our friendly staff.</strong> You will be delighted with the
            friendliness of our staff – they are always approachable and always
            professional. So if you are looking for a new spa or even if you
            haven’t visited us for a while NOW is the time for you to make Port
            Macquarie Day Spa your choice, for the things that you find
            important. Chances are we have you covered. We look forward to
            meeting you or welcoming you back again soon.
          </p>
        </div>
        <div className="mt-8 text-center w-full">
          <Link
            to="/contact"
            className="border border-gray-500 inline-block leading-none px-2 py-1 uppercase transition-all hover:bg-gray-800 hover:text-white hover:border-gray-800"
          >
            Contact us today
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Why;
