import React from 'react'
import {connect} from 'react-redux'
import {Button, Col} from 'react-bootstrap'
import {default as signUp} from '../signUp/signUp'
import {default as Mokap} from '../../MokapView/MokapView'
import {logIn} from '../CurrentUserReducer/actions/login'

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
      <div className="mokap-container">
        <Col xs={6}>
          <Mokap >
            <h2 className="formTitle">Zaloguj się</h2>
          <form onSubmit={this.handleSubmit}
                className="registration login-form">
            <inputLabel className="formLabel">Login:   </inputLabel>

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
            <br/><br/><br/>
            <div className="cssload-loader" id="my-loader-login">Ładowanie</div>
                <h4 id="login-alert"></h4>
          </form>
          </Mokap>

        </Col>
        <Col xs={6} className="loginContainer">
          <div >
            <Mokap>
              <h2 className="formTitle">Zarejestruj się!</h2>
            <form onSubmit={event => {
              event.preventDefault()
              return (signUp(event))
            }}
                  className="registration">
              <inputLabel className="formLabel">Login:</inputLabel>
              <input type="text" className="formInput" id="loginField"/>
              <br/>
              <br/>
              <inputLabel className="formLabel" id="wrongPassword">Hasło:</inputLabel>
              <input type="password" className="formInput" id="passwordField"/>
              <br/>
              <br/>
              <inputLabel className="formLabel" id="wrongPassword">Powtórz:</inputLabel>
              <input type="password" className="formInput" id="passwordCheck"/>
              <br/>
              <br/>
              <Button type="submit" bsStyle="info">Zapisz się</Button>
            </form><br/><br/><br/>
            <h3 id="signUpFail"></h3>
            <h3 id="signUpOk"></h3>
            <div className="cssload-loader" id="my-loader">Ładowanie</div>
            </Mokap>
          </div>
        </Col>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)