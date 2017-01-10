import React from 'react'

export default class extends React.Component {

  constructor() {
    super()

    this.state = {
      userName: '',
      userPassword: ''
    }

    this.handleSubmit = (event) => {
      event.preventDefault()
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