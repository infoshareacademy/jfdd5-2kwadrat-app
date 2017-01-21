import React from 'react'
import { connect } from 'react-redux'

import {logOut} from '../CurrentUserReducer/actions/logOut'
import {fetchUserData} from '../CurrentUserReducer/actions/fetchUserData'
const mapStateToProps = (state) => ({
  session: state.currentUserData.session,
  user: state.currentUserData.user
})

const mapDispatchToProps = (dispatch) => ({
  logout: (accessToken) => dispatch(logOut(accessToken)),
  fetchUserData: (userId, accessToken) => dispatch(fetchUserData(userId, accessToken))
})


class UsserAcount extends React.Component {

  componentWillMount() {
    this.props.fetchUserData(this.props.session.userId, this.props.session.id)
  }

  render() {
    return this.props.user !== null ? (
      <div>
        <h1>Witaj {this.props.user.username}!</h1>
      </div>
    ):<p>'Fetching user data...'</p>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsserAcount)
