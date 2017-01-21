import React from 'react'
import {connect} from 'react-redux'
import {Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './NavigationViewStyle.css'
import {logOut} from '../../LoginFormView/CurrentUserReducer/actions/logOut'
import MdAccountCircle from 'react-icons/lib/md/account-circle'
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

            <LinkContainer className="navItem" to="/shops">
              <NavItem eventKey={2} href="#">Sklepy</NavItem>
            </LinkContainer>

            <LinkContainer className="navItem" to="/filtered-recipes">
              <NavItem eventKey={3} href="#">Przepisy dla Ciebie</NavItem>
            </LinkContainer>

            {props.session !== null ? (
              <NavDropdown eventKey={4.01} title="Moje konto" id="1">
                <LinkContainer className="navItem" to="/favourite-recipes">
                  <NavItem eventKey={4.2} href="#">Ulubione</NavItem>
                </LinkContainer>


                <LinkContainer className="navItem" to="/needed-ingredient-view">
                  <NavItem eventKey={4.3} href="#">Lista zakupów</NavItem>
                </LinkContainer>


                <LinkContainer className="navItem" to="/calendar">
                  <NavItem eventKey={4.4} href="#">Kalendarz</NavItem>
                </LinkContainer>

                <LinkContainer className="navItem logout" to="/">
                  <NavItem eventKey={5} href="#"
                           onClick={() => props.logout(props.session.id)}>
                    Wyloguj
                  </NavItem>
                </LinkContainer>
              </NavDropdown>
            ) : null
            }

            <LinkContainer className="navItem" to="/login">
              <NavItem eventKey={4} href="#">
                {props.session === null ?
                  'Zaloguj się' : <MdAccountCircle className="avatar"/>
                }
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationView)