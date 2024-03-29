import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/main.scss"
import ScrollNav from "./scroll-nav"
import ContextProvider from "./store/contextprovider"

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
  
  return (
    <ContextProvider>
      <ScrollSync>
        <div class="layout">
          <ScrollSyncPane>
            <main id="main">
              <Header siteTitle={data.site.siteMetadata.title || `Title`} />
              {children}
              <footer>Noname Press ©2020</footer>
            </main>
          </ScrollSyncPane>
          <ScrollSyncPane>
            <ScrollNav books={books} />
          </ScrollSyncPane>
        </div>
      </ScrollSync>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
