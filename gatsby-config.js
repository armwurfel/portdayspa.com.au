module.exports = {
  siteMetadata: {
    abn: `22 157 474 173`,
    address: `Shop 3, Rydges, Hay Street, Port Macquarie NSW 2444`,
    author: ``,
    description: `Port Macquarie Day Spa wants to nourish and refresh your mind & spirit by revitalising your body. We will give you the care & attention that you need & deserve`,
    email: `relax@portdayspa.com.au`,
    facebook: `https://www.facebook.com/portdayspa`,
    googleMapsEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.47857046176!2d152.90702605182685!3d-31.428489403893394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff280ea97f31%3A0xcf0d5c3a49077419!2sPort+Macquarie+Day+Spa!5e0!3m2!1sen!2sau!4v1564538769509!5m2!1sen!2sau`,
    googleMapsLink: `https://goo.gl/maps/CXMwQXMB9s3KcDBU6`,
    instagram: `https://www.instagram.com/portmacquariedayspa/`,
    phone: `0265842255`,
    phoneFormatted: `(02) 6584 2255`,
    siteUrl: `https://www.portdayspa.com.au`,
    title: `Port Macquarie Day Spa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.portdayspa.com.au`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-146370267-1`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-552LNHH`,
      },
    },
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `portmacquariedayspa`,
      },
    },
  ],
};