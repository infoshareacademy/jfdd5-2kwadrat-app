import React from 'react'
import {connect} from 'react-redux'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {logOut} from '../CurrentUserReducer/actions/logOut'
import {fetchUserData} from '../CurrentUserReducer/actions/fetchUserData'
import '../../animations.css'
import './UserAccount.css'


const mapStateToProps = (state) => ({
  session: state.currentUserData.session,
  user: state.currentUserData.user
});

const mapDispatchToProps = (dispatch) => ({
  logout: (accessToken) => dispatch(logOut(accessToken)),
  fetchUserData: (userId, accessToken) => dispatch(fetchUserData(userId, accessToken))
});

class UsserAcount extends React.Component {

  componentWillMount() {
    this.props.fetchUserData(this.props.session.userId, this.props.session.id)
  }

  render() {
    return this.props.user !== null ? (
      <div>
        <ReactCSSTransitionGroup
            transitionName="fadeMokap"
            transitionEnterTimeout={0}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={0}
            transitionAppear={true}>
          <Col xs={6}>
            <div className="chef-cloud">
              <h3>Witaj <span className="userName"> {this.props.user.username}</span>!</h3>
              W zakładce
                <Link to={'/favourite-recipes'}>
                  <button className="simpleButton userButton">Ulubione
                  </button>
                </Link>
              przeglądaj swoje przepisy.
              W zakładce
                <Link to={'/needed-ingredient-view'}>
                  <button className="simpleButton userButton">Lista zakupów
                  </button>
                </Link>
              przeglądaj listy swoich zakupów.
              W zakładce
                <Link to={'/calendar'}>
                  <button className="simpleButton userButton">Kalendarz
                  </button>
                </Link>
              planuj co i kiedy będziesz gotować.
            </div>
          </Col>
          <Col xs={6}>
            <div className="chef">
            </div>
          </Col>
        </ReactCSSTransitionGroup>
      </div>
      ) : <p>'Fetching user data...'</p>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsserAcount)
