import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Books from "../components/books"

const IndexPage = (props) => {
  
  let books = props.data.allShopifyProduct.nodes;

  return (
    <Layout>
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
