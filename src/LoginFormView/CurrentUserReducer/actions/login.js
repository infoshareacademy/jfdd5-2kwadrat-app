export const LOG_IN__BEGIN = 'current-user/LOG_IN__BEGIN'
export const LOG_IN__SUCCESS = 'current-user/LOG_IN__SUCCESS'
export const LOG_IN__FAIL = 'current-user/LOG_IN__FAIL'


export const logIn = (username, password) => {
  return (dispatch) => {
    dispatch({type: LOG_IN__BEGIN})
    document.getElementById('login-alert').innerHTML = ''
    document.getElementById('my-loader-login').style.display = "block"
    fetch('https://salty-plateau-32425.herokuapp.com/api/users/login', {
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
              document.getElementById('my-loader-login').style.display = "none"
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