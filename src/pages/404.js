import React from "react"

import Layout2 from "../components/layout2"
import SEO from "../components/seo"

const NotFoundPage = (props) => {
  let books = props.data.allShopifyProduct.nodes
  return (
    <Layout2 books={books}>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
    </Layout2>
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
        variants {
          shopifyId
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
                srcSet
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
