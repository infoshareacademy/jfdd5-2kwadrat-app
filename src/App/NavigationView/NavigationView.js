import React from 'react'

import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './NavigationViewStyle.css'
export default () => {

return (
    <div className="container">
  <Navbar className="navbar-default">
    <Navbar.Header>
      <Navbar.Brand >
        <a className="logoIMF navbar-brand navbar-header" href="/">INSIDE MY FRIDGE</a>
      </Navbar.Brand>
    </Navbar.Header>

    <Nav pullRight className="navigation">
      <LinkContainer className="navItem" to="/recipes">
        <NavItem  eventKey={1} href="">PRZEPISY</NavItem>
      </LinkContainer>

      <LinkContainer to="/shops">
        <NavItem eventKey={2} href="#">SKLEPY</NavItem>
      </LinkContainer>

        <LinkContainer to="/filtered-recipes">
            <NavItem eventKey={3} href="#">PRZEPISY DLA CIEBIE</NavItem>
        </LinkContainer>
    </Nav>
  </Navbar>
    </div>
)
}