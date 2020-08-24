import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { GoMarkGithub } from 'react-icons/go'

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="lg" justify-content-between>
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
      <Nav>
        <Link to="https://github.com/thehouseplant/heavy-releases">
          <Nav.Link as="span"><GoMarkGithub size="2em" /></Nav.Link>
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
