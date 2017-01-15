import React from 'react'
import {connect} from 'react-redux'
import {loginTrying, logOut, logged} from './LoginFormReducer/actionCreators'
import {loggedIn} from './UsersReducer/actionCreators'
import {default as signUp} from './SignUp/SignUp'
import {Col, Button} from 'react-bootstrap'
import {Link} from 'react-router'

import './LoginFormView.css'

const mapStateToProps = state => ({
  loggedIn: state.loggedInData.loggedInStatus,
  loggedUserId: state.loggedInData.loggedInUserId,
  loginTriesStatus: state.loggedInData.loggingTests,
  user: state.loggedUser.userData
})

const mapDispatchToProps = dispatch => ({
  loggingIn: (user) => dispatch(loggedIn(user)),
  loginTrying: () => dispatch(loginTrying()),
  logout: () => dispatch(logOut()),
  logged: (user) => dispatch(logged(user))
})

class LoginFormView extends React.Component {

  constructor() {
    super()

    this.state = {
      userName: '',
      userPassword: '',
      data: null,
      loggedUser: null
    }
  }

  handleSubmit = (event) => {

    event.preventDefault()

    fetch(
      process.env.PUBLIC_URL + '/data/users.json'
    ).then(
      response => response.json()
    ).then(
      users =>
        users.find(
          user =>
          user.password === this.state.userPassword && user.login === this.state.userName
        )
    ).then(
      user =>
        fetch(
          process.env.PUBLIC_URL + '/data/user-' + user.id + '.json'
        ).then(
          response => response.json()
        ).then(
          loggedUser => {
            this.props.loggingIn(loggedUser)
            this.props.logged(loggedUser)
            return (this.setState({
              ...this.state,
              loggedUser: loggedUser
            }))
          }
        )).catch(() => console.error('zupa') + this.props.loginTrying())
  }

  render() {
    return (
      <div>
        {this.props.loggedIn ?
          <div>
            <h1>Witaj {this.props.user.name}</h1>
            <h2 className="instruction-text">W panelu <Link to={"/favourite-recipes"}><span className="span-button">Ulubione</span></Link>,
              oglądaj swoje ulubione przepisy.<br/>
              W panelu <Link to={"/needed-ingredient-view"}><span className="span-button">Lista zakupów</span></Link>
              obejrzyj listę zakupów</h2>
            <Button onClick={() =>
              this.props.logout()}
                    bsStyle="info"
                    bsSize="large"

            >Wyloguj
            </Button>
          </div> :
          <div >
            <Col xs={6}>
              <h2 className="formTitle">Zaloguj się</h2>
            </Col>

            <Col xs={6}>
              <h2 className="formTitle">Zarejestruj się!</h2>
            </Col>

            <Col xs={6} className="loginContainer">
              <form onSubmit={this.handleSubmit}
                    className="registration">
                <inputLabel className="formLabel">Login:</inputLabel>

                <input type="text"
                       className="formInput"
                       value={this.state.userName}
                       onChange={
                         event =>
                           this.setState({
                             userName: event.target.value
                           })
                       }
                />
                <br/>
                <br/>

                <inputLabel className="formLabel">Hasło:</inputLabel>

                <input type="password"
                       className="formInput"
                       value={this.state.userPassword}
                       onChange={
                         event =>
                           this.setState({
                             userPassword: event.target.value
                           })
                       }
                />
                <br/>
                <br/>

                <Button type="submit" bsStyle="info">Zaloguj się</Button>
                {
                  this.props.loginTriesStatus ?
                    <h4 className="login-alert">
                      Podałeś zły login lub hasło.<br/>
                      Spróbuj ponownie
                    </h4> :
                    ''
                }
              </form>
            </Col>

            <Col xs={6} className="loginContainer">
              <div >
                <form onSubmit={event => {
                  event.preventDefault()
                  return (signUp(event))
                }}
                      className="registration">
                  <inputLabel className="formLabel">Login :</inputLabel>
                  <input type="text" className="formInput" id="loginField"/>
                  <br/>
                  <br/>
                  <inputLabel className="formLabel" id="wrongPassword">Podaj hasło:</inputLabel>
                  <input type="password" className="formInput" id="passwordField"/>
                  <br/>
                  <br/>
                  <inputLabel className="formLabel" id="wrongPassword">Powtórz hasło:</inputLabel>
                  <input type="password" className="formInput" id="passwordCheck"/>
                  <br/>
                  <br/>
                  <Button type="submit" bsStyle="info">Zapisz się</Button>
                </form>
                <h3 id="signUpInfo"></h3>
              </div>
            </Col>
          </div>
        }

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormView)