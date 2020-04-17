import React from "react"  
import PropTypes from "prop-types"

import Nav from "./nav"  
import Seo from "./seo"

const Layout = ({ children }) => {  
  return (
    <div className="layout-container">
      <Seo />
      <Nav />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout