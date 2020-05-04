/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, con 💚 por
          {` `}
          <a href="https://zefe.website/">zefe</a>
        </Footer>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
