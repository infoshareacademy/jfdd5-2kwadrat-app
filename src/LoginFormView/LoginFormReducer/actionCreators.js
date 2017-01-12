import {LOGGED_IN, LOGIN_TRIES, LOG_OUT} from './actionTypes'


export const loginTrying = () => ({
  type: LOGIN_TRIES
})

export const logOut = () => ({
  type: LOG_OUT
})

export const logged = (user) => ({
  type: LOGGED_IN,
  userData: user
})
