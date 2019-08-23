/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allServicesJson {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);

  if (results.error) {
    console.error('Something went wrong!');
    return;
  }

  // Create pages for each service
  results.data.allServicesJson.edges.forEach(edge => {
    const service = edge.node;

    createPage({
      path: `/services/${service.slug}`,
      component: require.resolve('./src/templates/services.js'),
      context: {
        slug: service.slug,
        title: service.title,
      },
    });

    createPage({
      path: `/services`,
      component: require.resolve('./src/templates/services.js'),
      context: {
        slug: 'spa-packages',
        title: service.title,
      },
    });
  });
};
