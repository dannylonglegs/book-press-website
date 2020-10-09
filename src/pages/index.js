import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Books from "../components/books"

const IndexPage = (props) => {
  
  let books = props.data.allShopifyProduct.nodes;

  return (
    <Layout books={books}>
      <SEO title="Home" />
      <Books books={books}/>
    </Layout>
  )
}

export default IndexPage

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
