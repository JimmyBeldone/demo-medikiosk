import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      content: file(relativePath: { eq: "screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: `${
            100 / data.content.childImageSharp.fluid.aspectRatio
          }%`,
          position: "relative",
        }}
      >
        <img
          src={data.content.childImageSharp.fluid.src}
          style={{
            position: "absolute",
            maxWidth: "100%",
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // background: `rebeccapurple`,
            // backgroundImage: `url(${data.header.childImageSharp.fluid.src})`,
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",

            // padding: `1.45rem 1.0875rem`,
          }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
