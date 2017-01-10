import {LOGGED_IN} from './actionTypes'

const initialState = {
  loggedInStatus: false,
  loggedInUserId: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedInStatus: true
      }
    default:
      return state
  }
}
