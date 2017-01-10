import {LOGGED_IN,LOGIN_TRIES} from './actionTypes'

const initialState = {
  loggedInStatus: false,
  loggedInUserId: '',
  loggingTests: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedInStatus: true,
        loggingTests:false
      }
    case LOGIN_TRIES:
      return{
        ...state,
        loggingTests: true
      }
    default:
      return state
  }
}
