import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <nav className="container-fluid">
    <ul>
      <li>
        <strong>{siteTitle}</strong></li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
