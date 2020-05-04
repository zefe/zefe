import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader } from "../styles/components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
