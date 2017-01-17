import {
  FETCH_USER_DATA__BEGIN,
  FETCH_USER_DATA__SUCCESS,
  FETCH_USER_DATA__FAIL
} from './actions/fetchUserData'

import {
  LOG_IN__BEGIN,
  LOG_IN__SUCCESS,
  LOG_IN__FAIL
} from './actions/login'

import {
  LOG_OUT__BEGIN,
  LOG_OUT__SUCCESS,
  LOG_OUT__FAIL
} from './actions/logOut'


const initialState = {
  session: null,
  user: null,
  pending: false
}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_IN__BEGIN:
      return {
        ...state,
        pending: true
      }
    case LOG_IN__SUCCESS:
      return {
        ...state,
        pending: false,
        session: action.session
      }
    case LOG_OUT__SUCCESS:
      return initialState
    case LOG_OUT__FAIL:
      return initialState
    case FETCH_USER_DATA__SUCCESS:
      return {
        ...state,
        user: action.userData
      }
    case FETCH_USER_DATA__FAIL:
      return initialState
    default:
      return state
  }
}
