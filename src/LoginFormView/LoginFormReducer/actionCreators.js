import {LOGGED_IN, LOGIN_TRIES} from './actionTypes'

export const loggedIn = (user) => ({
  type: LOGGED_IN,
  userData:user
})

export const loginTrying = () => ({
  type: LOGIN_TRIES
})