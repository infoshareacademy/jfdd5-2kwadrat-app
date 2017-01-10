import React from 'react'
import {connect} from 'react-redux'
import {loggedIn} from './LoginFormReducer/actionCreators'

const mapStateToProps = state => ({
  loggedIn: state.loggedInData.loggedInStatus,
  loggedUserId: state.loggedInData.loggedInUserId
})

const mapDispatchToProps = dispatch => ({
  loggingIn: () => dispatch(loggedIn())

})

class LoginFormView extends React.Component {

  constructor() {
    super()

    this.state = {
      userName: '',
      userPassword: '',
      data: null
    }

    this.handleSubmit = (event) => {
      event.preventDefault()
      this.props.loggingIn()

    }
  }

  render() {
    return (
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
          <p>{this.state.userName + ' ' + this.state.userPassword}</p>

        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormView)