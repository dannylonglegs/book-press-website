module.exports = {
  siteMetadata: {
    title: `Noname Books`,
    description: `A book publisher`,
    author: `Noname books`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: `book-press-1.myshopify.com`,
        // The storefront access token
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
