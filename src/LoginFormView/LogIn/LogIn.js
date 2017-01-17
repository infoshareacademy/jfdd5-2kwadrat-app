import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import { logIn } from '../CurrentUserReducer/actions/login'

const mapStateToProps = state => ({
  session: state.currentUserData.session
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(logIn(username, password)),
})

class LogIn extends React.Component {
  constructor() {
    super()

    this.state = {
      userName: '',
      userPassword: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.userName, this.state.userPassword)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}
              className="registration">
          <inputLabel className="formLabel">Login:</inputLabel>

          <input type="text"
                 className="formInput"
                 value={this.state.userName}
                 onChange={(event) => this.setState({userName: event.target.value})}
          />
          <br/>
          <br/>

          <inputLabel className="formLabel">Hasło:</inputLabel>

          <input type="password"
                 className="formInput"
                 value={this.state.userPassword}
                 onChange={(event) => this.setState({userPassword: event.target.value})}

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
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)