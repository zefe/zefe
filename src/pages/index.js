import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Bio from "../components/Bio"
import Project from "../components/Project"

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
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Bio description={data.allSite.edges[0].node.siteMetadata.description} />
      <Project />
    </>
  )
}

export default IndexPage
