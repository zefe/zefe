import React from "react"
import { StyledCertificates } from "../styles/components"

export default function Certificates({ certificates }) {
  return (
    <StyledCertificates>
      <h2>Certificates</h2>
      <section>
        {certificates.map(({ node }) => {
          return (
            <article key={node.id}>
              <img src={node.publicURL} alt={node.name} />
              <p>Name: {node.name}</p>
            </article>
          )
        })}
      </section>
    </StyledCertificates>
  )
}
