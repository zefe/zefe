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
                My current languages of choice are JavaScript though I am
                skilled with HTML5 and CSS3 as well. Front-end Web Developer ,
                competent in all aspects of software development. I have gained
                experience in languages and technologies such as Git, React,
                jQuery, NodeJS, ExpressJs PosgreSQL, MongoDB, MySql.
              </p>

              <Link to="/Education">
                {" "}
                <Button>Education</Button>
              </Link>
            </Article>
          </Item2>
        </Row>
      </Container>
      <Project />
    </>
  )
}

export default IndexPage
