export const LOG_IN__BEGIN = 'current-user/LOG_IN__BEGIN'
export const LOG_IN__SUCCESS = 'current-user/LOG_IN__SUCCESS'
export const LOG_IN__FAIL = 'current-user/LOG_IN__FAIL'


export const logIn = (username, password) => {
  return (dispatch) => {
    dispatch({type: LOG_IN__BEGIN})
    fetch('http://localhost:3001/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(
      response => {
        if (response.status === 200) {
          response.json().then(
            session => dispatch({type: LOG_IN__SUCCESS, session: session})
          )
        }
        else {
          response.json().then(
            error => {
              console.log('zupaaaaa')
              document.getElementById('login-alert').innerHTML = 'Zły login lub hasło'
              return(
                dispatch({type: LOG_IN__FAIL, error: error})
            )
            }
          )
        }
      }
    )
  }
}