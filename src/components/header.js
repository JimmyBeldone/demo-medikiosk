import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
// import Img from "gatsby-image"
import React from "react"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "header.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        width: "100%",
        height: "auto",
        paddingBottom: `${
          100 / data.header.childImageSharp.fluid.aspectRatio
        }%`,
        position: "relative",
      }}
    >
      <img
        src={data.header.childImageSharp.fluid.src}
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
      {/* <div
        style={{
          position: "absolute",
          maxWidth: "100%",
          height: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `rebeccapurple`,
          backgroundImage: `url(${data.header.childImageSharp.fluid.src})`,
          backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",

          // padding: `1.45rem 1.0875rem`,
        }}
      ></div> */}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
