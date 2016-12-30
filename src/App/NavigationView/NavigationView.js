import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './NavigationViewStyle.css'

export default () => {

return (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">INSIDE MY FRIDGE</a>
      </Navbar.Brand>
    </Navbar.Header>

    <Nav pullRight>
      <LinkContainer to="/recipes">
        <NavItem eventKey={1} href="">Recipes</NavItem>
      </LinkContainer>

      <LinkContainer to="/shops">
        <NavItem eventKey={2} href="#">Shops</NavItem>
      </LinkContainer>

        <LinkContainer to="/filtered-recipes">
            <NavItem eventKey={3} href="#">Recipes for you</NavItem>
        </LinkContainer>
    </Nav>
  </Navbar>
)
}