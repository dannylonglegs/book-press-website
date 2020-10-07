import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = (props) => {
  let books = props.data.allShopifyProduct.nodes
  return (
    <Layout books={books}>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    allShopifyProduct {
      nodes {
        id
        title
        vendor
        shopifyId
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        description
        descriptionHtml
        images {
          localFile {
            prettySize
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }
`
