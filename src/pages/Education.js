import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Avatar from "../components/avatar"
import Certificates from "../components/Certificates"
import { graphql } from "gatsby"
import {
  Container,
  Row,
  Item1,
  Item2,
  Article,
} from "../styles/StyledEducation"

export const query = graphql`
  query GET_CERTIFICATES {
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

const Education = ({ data }) => (
  <>
    <SEO title="Education" />
    <Container>
      <Row>
        <Item1>
          <div>
            <Avatar />
          </div>
        </Item1>
        <Item2>
          <Article>
            <h2>Education</h2>
            <p>
              Learning{" "}
              <span role="img" aria-label="emoji">
                📗👨‍🎓👩‍🎓
              </span>{" "}
              is constant and not just talk about technology, because in the
              field of life there will always be new experiences, and that is
              what makes us experts in the area that we are passionate about.
            </p>
            <p>Learn something new before bed.</p>
          </Article>
        </Item2>
      </Row>
    </Container>
    <Link to="/">Go back to the homepage</Link>
    <Certificates certificates={data.allFile.edges} />
  </>
)

export default Education
