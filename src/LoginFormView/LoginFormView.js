import React from 'react'

export default class extends React.Component {

  render() {
    return (
      <div>
        <h1>Zaloguj się</h1>
        <form>
          <inputLabel>Login:</inputLabel>

          <input type="text"/><br/><br/>

          <inputLabel>Hasło:</inputLabel>

          <input type="password"/><br/><br/>

          <button type="submit">Zaloguj</button>
        </form>
      </div>
    )
  }
}