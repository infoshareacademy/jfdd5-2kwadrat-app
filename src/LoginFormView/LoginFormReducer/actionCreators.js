import {LOGGED_IN, LOGIN_TRIES} from './actionTypes'

export const loggedIn = () => ({
  type: LOGGED_IN
})

export const loginTrying = () => ({
  type: LOGIN_TRIES
})