/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import screenfull from "screenfull"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [isFs, setFs] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  if (typeof window !== "undefined" && screenfull.isEnabled) {
    screenfull.on("change", () => {
      setFs(screenfull.isFullscreen)
      console.log("Am I fullscreen?", screenfull.isFullscreen ? "Yes" : "No")
    })
  }

  const fullscreen = () => {
    if (typeof window !== "undefined" && screenfull.isEnabled) {
      const getFullScreenNode = () => document.documentElement || document.body
      screenfull.toggle(getFullScreenNode())
    } else {
      console.log("no no no")
    }
  }
  console.log("isFullscreen ? ", screenfull.isFullscreen)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      {isFs ? null : (
        <button className="fullscreen" onClick={fullscreen}>
          Fullscreen
        </button>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
