import React from "react"
import { graphql } from "gatsby"

import Layout2 from "../components/layout2"
import SEO from "../components/seo"

const CartPage = (props) => {
  
  let books = props.data.allShopifyProduct.nodes;

  return (
    <Layout2 books={books}>
      <SEO title="Cart" />
      <section class="cart">
        <h1>Coming Soon</h1>
      </section>
    </Layout2>
  )
}

export default CartPage

export const pageQuery = graphql`
  query {
    allShopifyProduct {
      nodes {
        id
        title
        handle
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
