import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

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
      {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">*/}
      {/*<MenuItem eventKey={3.1}>Action</MenuItem>*/}
      {/*<MenuItem eventKey={3.2}>Another action</MenuItem>*/}
      {/*<MenuItem eventKey={3.3}>Something else here</MenuItem>*/}
      {/*<MenuItem divider />*/}
      {/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
      {/*</NavDropdown>*/}
    </Nav>
  </Navbar>
)
}