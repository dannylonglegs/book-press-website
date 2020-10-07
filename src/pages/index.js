import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

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
