import React from 'react'
import {connect} from 'react-redux'

import {default as LogIn} from './LogIn/LogIn'
import {default as UsserAcount} from './UsserAcount/UsserAcount'

import './LoginFormView.css'

import { logIn } from './CurrentUserReducer/actions/login'
import { logOut } from './CurrentUserReducer/actions/logOut'
import { fetchUserData } from './CurrentUserReducer/actions/fetchUserData'

const mapStateToProps = state => ({
  session: state.currentUserData.session,
  user: state.currentUserData.user
})

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(logIn(username, password)),
  logout: (accessToken) => dispatch(logOut(accessToken)),
  fetchUserData: (userId, accessToken) => dispatch(fetchUserData(userId, accessToken))
})

class LoginFormView extends React.Component {

  constructor() {
    super()

    this.state = {
      userName: '',
      userPassword: ''
    }
  }

  render() {
    return (
        this.props.session === null ?
         <LogIn />
         :
          <UsserAcount/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormView)