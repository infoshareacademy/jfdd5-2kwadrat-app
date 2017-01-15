import React from 'react'
import {connect} from 'react-redux'
import {loginTrying, logOut, logged} from './LoginFormReducer/actionCreators'
import {loggedIn} from './UsersReducer/actionCreators'
import {Col} from 'react-bootstrap'
import {default as signUp} from './SignUp/SignUp'

import './LoginFormView.css'

const mapStateToProps = state => ({
  loggedIn: state.loggedInData.loggedInStatus,
  loggedUserId: state.loggedInData.loggedInUserId,
  loginTriesStatus: state.loggedInData.loggingTests
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
            <h1>Witaj Użytkowniku</h1>
            <h3>W panelu Ulubione oglądaj swoje ulubione przepisy.<br/>
              W panelu Lista zakupów obejrzyj listę zakupów</h3>
            <button onClick={
              () =>
                this.props.logout()
            }
            >Wyloguj
            </button>
          </div> :
          <div>
            <Col xs={6}>
              <h1>Zaloguj się</h1>
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

                <button type="submit">Zaloguj</button>
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

            <Col xs={6}>
              <div >
                <h1>Nie masz konta?</h1>
                <h3>Dołącz do nas</h3>
                <p>Zarejestruj się!</p>

                <form onSubmit={event=> {
                  event.preventDefault()
                  return (signUp(event))
                }
                }
                      className="registration">
                  <inputLabel className="formLabel">Login :</inputLabel>
                  <input type="text"  className="formInput" id="loginField"/>
                  <br/>
                  <br/>
                  <inputLabel className="formLabel">Podaj hasło:</inputLabel>
                  <input type="password"  className="formInput" id="passwordField"/>
                  <br/>
                  <br/>
                  <inputLabel className="formLabel">Powtórz hasło:</inputLabel>
                  <input type="password"  className="formInput" id="passwordCheck"/>
                  <br/>
                  <br/>
                  <button type="submit">Zapisz się</button>
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