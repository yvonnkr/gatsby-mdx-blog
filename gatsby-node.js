const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const response = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const posts = response.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/postTemplate.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};

//frontmatter
