import React from "react"
import { StyledBio, Button } from "../styles/components"
import Avatar from "./avatar"
import { Link } from "gatsby"

const Bio = ({ description }) => {
  return (
    <StyledBio>
      <div>
        <h2>{description}</h2>
        <p>
          My current languages of choice are JavaScript though I am skilled with
          HTML5 and CSS3 as well. Front-end Web Developer , competent in all
          aspects of software development, participation in projects and web
          support, and courses taken at school, I have gained experience in
          languages and technologies such as Git, React, jQuery, NodeJS,
          ExpressJs PosgreSQL, MongoDB, MySql.
        </p>

        <Link to="/Education/">
          {" "}
          <Button>Portfolio</Button>
        </Link>
      </div>
      <Avatar />
    </StyledBio>
  )
}

export default Bio
