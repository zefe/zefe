import React from "react"
import { StyledCards } from "../styles/components"

export default function Certificates({ certificates }) {
  return (
    <StyledCards>
      <h2>Certificates</h2>
      <section>
        {certificates.map(({ node }) => {
          return (
            <article key={node.id}>
              <img src={node.publicURL} alt={node.name} />
            </article>
          )
        })}
      </section>
    </StyledCards>
  )
}
