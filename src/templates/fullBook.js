import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class FullBook extends React.Component {
  render() {
    let books = this.props.data.allShopifyProduct.nodes
    return <Layout books={books}>
        
    </Layout>
  }
}

export default FullBook

export const pageQuery = graphql`
  query projectBySlug($slug: String!) {
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
  shopifyProduct(handle: { eq: $slug }) {
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
`
