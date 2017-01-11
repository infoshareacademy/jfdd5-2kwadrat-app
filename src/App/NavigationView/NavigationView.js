import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    loggedIn: state.loggedInData.loggedInStatus,
    user: state.loggedInData.userData
})

import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './NavigationViewStyle.css'


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
                        <LinkContainer className="navItem" to="/form">
                            <NavItem eventKey={0} href="#">Formularz</NavItem>
                        </LinkContainer>

                        <LinkContainer className="navItem" to="/recipes">
                            <NavItem eventKey={1} href="#">Przepisy</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/shops">
                            <NavItem eventKey={2} href="#">Sklepy</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/filtered-recipes">
                            <NavItem eventKey={3} href="#">Przepisy dla Ciebie</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <NavItem eventKey={4} href="#">{props.loggedIn ?
                                'HEJ' : 'Zaloguj się'
                            }</NavItem>
                        </LinkContainer>

                        {
                            props.loggedIn ?
                                <LinkContainer to="/favourite-recipes">
                                    <NavItem eventKey={6} href="#">Ulubione</NavItem>
                                </LinkContainer> :
                                ''}

                        {
                            props.loggedIn ?
                                <LinkContainer to="/needed-ingredient-view">
                                    <NavItem eventKey={5} href="#">Lista zakupów</NavItem>
                                </LinkContainer> :
                                ''
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default connect(mapStateToProps)(NavigationView)