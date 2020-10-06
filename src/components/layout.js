import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/main.scss"
import ScrollNav from "./scroll-nav"

import { ScrollSync, ScrollSyncPane } from "react-scroll-sync"

const Layout = ({ children, books }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // console.log( books, "books in layout")
  return (
    <ScrollSync>
      <div class="layout">
        <ScrollSyncPane>
          <main id="main">
            <Header siteTitle={data.site.siteMetadata.title || `Title`} />
            {children}
          </main>
        </ScrollSyncPane>

        <ScrollSyncPane>
          <ScrollNav books={books} />
        </ScrollSyncPane>
      </div>
    </ScrollSync>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
