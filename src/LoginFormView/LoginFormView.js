import React from 'react'
import {connect} from 'react-redux'
import {loggedIn, loginTrying, logOut} from './LoginFormReducer/actionCreators'

import './LoginFormView.css'

const mapStateToProps = state => ({
  loggedIn: state.loggedInData.loggedInStatus,
  loggedUserId: state.loggedInData.loggedInUserId,
  loginTriesStatus: state.loggedInData.loggingTests
})

const mapDispatchToProps = dispatch => ({
  loggingIn: (user) => dispatch(loggedIn(user)),
  loginTrying: () => dispatch(loginTrying()),
  logout: () => dispatch(logOut())
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
            return (this.setState({
              ...this.state,
              loggedUser: loggedUser
            }))
          }
        )).catch(() => console.error('zupa') + this.props.loginTrying())
  }


  componentDidUpdate() {
    console.log(this.state)
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
            <h1>Zaloguj się</h1>
            <form onSubmit={this.handleSubmit}>
              <inputLabel>Login:</inputLabel>

              <input type="text"
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

              <inputLabel>Hasło:</inputLabel>

              <input type="password"
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
          </div>
        }

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormView)