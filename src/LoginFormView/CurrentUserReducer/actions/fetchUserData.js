export const FETCH_USER_DATA__BEGIN = 'current-user/FETCH_USER_DATA__BEGIN';
export const FETCH_USER_DATA__SUCCESS = 'current-user/FETCH_USER_DATA__SUCCESS';
export const FETCH_USER_DATA__FAIL = 'current-user/FETCH_USER_DATA__FAIL';

export const fetchUserData = (userId, accessToken) => {
  return dispatch => {
    dispatch({ type: FETCH_USER_DATA__BEGIN });

    fetch(
      'https://salty-plateau-32425.herokuapp.com/api/users/' + userId + '?access_token=' + accessToken
    ).then(
      response => {
        if (response.status === 200) {
          response.json().then(
            userData => dispatch({ type: FETCH_USER_DATA__SUCCESS, userData: userData })
          )
        }
        if (response.status === 401) {
          dispatch({ type: FETCH_USER_DATA__FAIL })
        }
      }
    )
  }
};