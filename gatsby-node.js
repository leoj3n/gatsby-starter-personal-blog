const _ = require('lodash');

const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const separatorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separatorIndex ? separatorIndex + 2 : 0;
    createNodeField({
      node,
      name: `slug`,
      value: `${separatorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
    });
    createNodeField({
      node,
      name: `prefix`,
      value: separatorIndex ? slug.substring(1, separatorIndex) : ""
    });
  }
};

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     const postTemplate = path.resolve("./src/templates/PostTemplate.js");
//     const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
//     resolve(
//       graphql(
//         `
//           {
//             allMarkdownRemark(filter: { id: { regex: "//posts|pages//" } }, limit: 1000) {
//               edges {
//                 node {
//                   id
//                   fields {
//                     slug
//                     prefix
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors);
//           reject(result.errors);
//         }

//         // Create posts and pages.
//         _.each(result.data.allMarkdownRemark.edges, edge => {
//           const slug = edge.node.fields.slug;
//           const isPost = /posts/.test(edge.node.id);

//           createPage({
//             path: slug,
//             component: isPost ? postTemplate : pageTemplate,
//             context: {
//               slug: slug
//             }
//           });
//         });
//       })
//     );
//   });
// };

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  switch (stage) {
    case "build-javascript":
  }
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin(
    {
      name: `babel-plugin-transform-decorators-legacy`
    },
    {
      name: `babel-plugin-syntax-dynamic-import`
    }
  );
};
