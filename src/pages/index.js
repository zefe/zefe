import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Project from "../components/Project"
import Avatar from "../components/avatar"
import {
  Container,
  Row,
  Item1,
  Item2,
  Article,
  Button,
} from "../styles/StyledEducation"

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
    allFile(
      filter: {
        extension: { regex: "/(png)/" }
        relativeDirectory: { eq: "projects" }
      }
    ) {
      edges {
        node {
          id
          name
          publicURL
          base
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  let description = data.allSite.edges[0].node.siteMetadata.description
  return (
    <>
      <SEO title="Home" />
      <Container>
        <Row>
          <Item1>
            <div>
              <Avatar />
            </div>
          </Item1>
          <Item2>
            <Article>
              <h2>{description}</h2>
              <p>
                I have been in the web technology industry since 2012.
                <br /> My current languages are JavaScript and Python. Frontend
                and backend web developer, competent in all aspects of software
                development. I have gained experience in languages and
                technologies such as: React, Css, Axios, Gatsby, Graphql,
                jQuery, NodeJS, ExpressJs, Git, Python, Django, Docker, Aws,
                PosgreSQL, MongoDB, Celery, Redis y Prototype design with Figma.
              </p>
              <p>I also have experience developing modules in Salesforce.</p>

              <Link to="/Education">
                {" "}
                <Button>Education</Button>
              </Link>
            </Article>
          </Item2>
        </Row>
      </Container>
      <Project data={data} />
    </>
  )
}

export default IndexPage
