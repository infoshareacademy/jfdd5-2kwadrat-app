import React from 'react'
import {connect} from 'react-redux'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
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
        <Col xs={6}>
          <div className="chef-cloud">
            <h3>Witaj <span className="userName"> {this.props.user.username}</span>!</h3>
            W zakładce
            <Link to={'/favourite-recipes'}>
              <button className="simpleButton usserButton">Ulubione
              </button>
            </Link>
            przeglądaj swoje przepisy.
            W zakładce
            <Link to={'/needed-ingredient-view'}>
              <button className="simpleButton usserButton">Lista zakupów
              </button>
            </Link>
            przeglądaj listy swoich zakupów.
            W zakładce
            <Link to={'/calendar'}>
              <button className="simpleButton usserButton">Kalendarz
              </button>
            </Link>
            planuj co i kiedy będziesz gotować.
          </div>
        </Col>
        <Col xs={6}>
          <div className="chef">
          </div>
        </Col>
      </div>
    ) : <p>'Fetching user data...'</p>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsserAcount)
