/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import screenfull from "screenfull"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const fullscreen = () => {
    console.log("fullscreen")
    console.log("TCL: fullscreen -> screenfull.isEnabled", screenfull.isEnabled)
    if (typeof window !== "undefined" && screenfull.isEnabled) {
      const getFullScreenNode = () => document.documentElement || document.body
      screenfull.toggle(getFullScreenNode())
    } else {
      console.log("no no no")
    }
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <button className="fullscreen" onClick={fullscreen}>
        Fullscreen
      </button>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
