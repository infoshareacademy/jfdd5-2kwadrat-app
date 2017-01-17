export const LOG_OUT__BEGIN = 'current-user/LOG_OUT__BEGIN'
export const LOG_OUT__SUCCESS = 'current-user/LOG_OUT__SUCCESS'
export const LOG_OUT__FAIL = 'current-user/LOG_OUT__FAIL'

export const logOut = (accessToken) => {
  return (dispatch) => {
    dispatch({type: LOG_OUT__BEGIN})
    fetch('http://localhost:3001/api/users/logout?access_token=' + accessToken , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      response => {
        if (response.status === 204) {
          dispatch({type: LOG_OUT__SUCCESS })
        } else {
          dispatch({type: LOG_OUT__FAIL })
        }
      }
    )
  }
}