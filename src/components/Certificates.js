import React from "react"
import { StyledCards } from "../styles/components"
import Img from "gatsby-image"

export default function Certificates({ data }) {
  console.log(data)

  return (
    <StyledCards>
      <h2>Certificates</h2>
      <section>
        {data.allFile.edges.map(({ node }) => {
          return (
            <article key={node.id}>
              <Img fluid={node.childImageSharp.fluid} />
            </article>
          )
        })}
      </section>
    </StyledCards>
  )
}
