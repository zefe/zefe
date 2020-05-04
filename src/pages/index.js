import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Bio from "../components/Bio"
import Certificates from "../components/Certificates"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allFile {
      edges {
        node {
          publicURL
          id
          name
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Bio description={data.allSite.edges[0].node.siteMetadata.description} />
      <Certificates certificates={data.allFile.edges} />
    </>
  )
}

export default IndexPage
