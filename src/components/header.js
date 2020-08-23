import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Link to="/">
      <Navbar.Brand as="span">{siteTitle}</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link as="span">Home</Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
