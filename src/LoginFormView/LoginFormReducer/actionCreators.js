import {LOGGED_IN, LOGIN_TRIES} from './actionTypes'

export const loggedIn = (userId) => ({
  type: LOGGED_IN,
  userId:userId
})

export const loginTrying = () => ({
  type: LOGIN_TRIES
})