import React from 'react'
import './NavigationViewStyle.css'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default () => {

return (
    <div className="container">
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand >
        <a className="logoIMF" href="/">INSIDE MY FRIDGE</a>
      </Navbar.Brand>
    </Navbar.Header>

    <Nav pullRight className="navigation">
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
    </div>
)
}