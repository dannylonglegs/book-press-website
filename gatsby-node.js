/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const bookPost = path.resolve(`./src/templates/fullBook.js`)
  const result = await graphql(
    `{
    allShopifyProduct {
        edges {
            node {
                title 
                handle
              }
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allShopifyProduct.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.handle,
      component: bookPost,
      context: {
        slug: post.node.handle,
        previous,
        next,
      },
    })
  })
}