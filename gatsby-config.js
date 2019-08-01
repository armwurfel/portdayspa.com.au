module.exports = {
  siteMetadata: {
    title: `Port Macquarie Day Spa`,
    description: `Port Macquarie Day Spa wants to nourish and refresh your mind & spirit by revitalising your body. We will give you the care & attention that you need & deserve`,
    email: `relax@portdayspa.com.au`,
    phone: `0265842255`,
    phoneFormatted: `(02) 6584 2255`,
    siteUrl: `https://www.portdayspa.com.au`,
    author: ``,
    facebook: `https://www.facebook.com/portdayspa`,
    instagram: `https://www.instagram.com/portmacquariedayspa/`,
    address: `Shop 3, Rydges, Hay Street, Port Macquarie NSW 2444`,
    googleMapsLink: `https://goo.gl/maps/CXMwQXMB9s3KcDBU6`,
    googleMapsEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.47857046176!2d152.90702605182685!3d-31.428489403893394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff280ea97f31%3A0xcf0d5c3a49077419!2sPort+Macquarie+Day+Spa!5e0!3m2!1sen!2sau!4v1564538769509!5m2!1sen!2sau`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.portdayspa.com.au`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#393A3B`,
        theme_color: `#393A3B`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
