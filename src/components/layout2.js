import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/main.scss"
import ScrollNav from "./scroll-nav"
import ContextProvider from "./store/contextprovider"

import { ScrollSync, ScrollSyncPane } from "react-scroll-sync"

const Layout2 = ({ children, books }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ContextProvider>
        <div class="layout2">
            <main id="main">
              <Header siteTitle={data.site.siteMetadata.title || `Title`} />
              {children}
              <footer>Noname Press ©2020</footer>
            </main>
        </div>
    </ContextProvider>
  )
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2
