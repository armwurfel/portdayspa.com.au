import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const SpaInformationAndConditionsPage = () => {
  const data = useStaticQuery(graphql`
    query SpaInformationAndConditionsPageQuery {
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
      <SEO title="Spa Information & Condition" />
      <Layout>
        <article
          id="information-and-conditions"
          className="bg-white px-4 md:px-6 py-24 relative w-full z-10"
        >
          <div className="flex flex-wrap max-w-6xl mx-auto w-full">
            <div className="w-full md:w-1/3">
              <h2 className="font-semibold font-serif leading-tight md:p-10 text-2xl uppercase w-full">
                <span className="inline-block">Spa Information&nbsp;</span>
                <span className="inline-block">&amp; Conditions.</span>
              </h2>
            </div>
            <div className="md:col-2 w-full md:w-2/3">
              <p className="mt-4 md:mt-0">
                <strong>Arrival.</strong> To ensure that we can give you the
                treatment you deserve, please arrive 15 minutes prior to your
                appointment. Arriving late will limit your treatment and time
                spent with us. Treatments will always finish as scheduled so as
                not to inconvenience our next client.
              </p>
              <p>
                <strong>Children</strong> We take great care in delivering a
                tranquil environment. Please make arrangements that allow you to
                benefit fully from your treatment.
              </p>
              <p>
                <strong>Executives</strong> Being successful includes
                maintaining equilibrium in life. Our treatments can assist in
                dealing with the wear and tear on your system.
              </p>
              <p>
                <strong>Gift Voucher / Corporate Rewards</strong> The perfect
                gift is one of our gift vouchers. Thank your staff or a valued
                client with one of our packages. Our team will be delighted to
                assist. You can purchase gift vouchers on our Web Site or over
                the phone. In addition we can post them if required.
              </p>
              <p>
                <strong>Groups and Couples</strong> It’s great to catch up with
                friends and we can help make this a special memory.
              </p>
              <p>
                <strong>Men</strong> We can assist you with your skin care,
                grooming and massage. Allow us to help you de-stress and balance
                your busy life.
              </p>
              <p>
                <strong>Mobile Phones</strong> Help us maintain tranquility in
                the Spa by switching off all mobile phones.
              </p>
              <p>
                <strong>Parking</strong> There is a range of car parking space
                near the Spa. We recommend you choose one that allows you
                sufficient time to enjoy your treatment.
              </p>
              <p>
                <strong>Pre Bridal, Formal, Special Occasion</strong> We offer a
                variety of bride and groom packages for your perfect day.
              </p>
              <p>
                <strong>Pregnancy</strong> Not all treatments are suitable for
                the mum to be. Please advise us when you book, so that we can
                suggest suitable treatments.
              </p>
              <p>
                <strong>Reservations / Cancellations</strong> Our friendly team
                are here to assist you with any questions you may have when
                booking. If you need to cancel an appointment, please give us 24
                hours notice (for Spa packages and group bookings we ask for 5
                days notice) to avoid a cancellation fee. Please call on{' '}
                <a className="font-bold" href={`tel:${phone}`}>
                  {phoneFormatted}
                </a>
                .
              </p>
              <p>
                <strong>Valuables</strong> We suggest you leave valuables at
                home. All care will be taken, but Port Macquarie Day Spa can not
                take responsibility for valuables left in our rooms.
              </p>
              <p>
                <strong>Opening Hours </strong>
                <br />
                <strong>Mon, Tue, Wed, Fri:</strong> 9am – 6pm
                <br />
                <strong>Thu:</strong> 10am – 7pm
                <br />
                <strong>Sat:</strong> 9am – 4pm
              </p>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default SpaInformationAndConditionsPage;
