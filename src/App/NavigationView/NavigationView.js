import React from 'react'
import {connect} from 'react-redux'
import {Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './NavigationViewStyle.css'
import {logOut} from '../../LoginFormView/CurrentUserReducer/actions/logOut'

const mapStateToProps = state => ({
  session: state.currentUserData.session,
})

const mapDispatchToProps = (dispatch) => ({
  logout: (accessToken) => dispatch(logOut(accessToken))
})


const NavigationView = (props) => {

  return (
    <div className="container">
      <Navbar className="navbar-default" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand >
            <a className="logoIMF navbar-brand navbar-header" href="/">INSIDE MY FRIDGE</a>
          </Navbar.Brand>
          <Navbar.Toggle className="hamburger"/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className="navigation">
            <LinkContainer className="navItem" to="/recipes">
              <NavItem eventKey={1} href="#">Przepisy</NavItem>
            </LinkContainer>

            <LinkContainer to="/shops">
              <NavItem eventKey={2} href="#">Sklepy</NavItem>
            </LinkContainer>

            <LinkContainer to="/filtered-recipes">
              <NavItem eventKey={3} href="#">Przepisy dla Ciebie</NavItem>
            </LinkContainer>

            {props.session === null ? (
              <LinkContainer to="/login">
                <NavItem eventKey={4} href="#">
                  Zaloguj się
                </NavItem>
              </LinkContainer>
            ):
              null }
            {props.session !== null ? (
              <NavDropdown eventKey={4.01} title="Moje konto" id="1">
                <LinkContainer to="/favourite-recipes">
                  <NavItem eventKey={4.2} href="#">Ulubione</NavItem>
                </LinkContainer>


                <LinkContainer to="/needed-ingredient-view">
                  <NavItem eventKey={4.3} href="#">Lista zakupów</NavItem>
                </LinkContainer>


                <LinkContainer to="/calendar">
                  <NavItem eventKey={4.4} href="#">Kalendarz</NavItem>
                </LinkContainer>

                <LinkContainer className="navItem" to="/">
                  <NavItem eventKey={4} href="#"
                           onClick={() => props.logout(props.session.id)}>
                    Wyloguj
                  </NavItem>
                  </LinkContainer>
              </NavDropdown>
            ) : null
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(NavigationView)