import React from 'react'
import {Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import {fetchShoppingList} from '../FavouriteReducer/actionCreatos'

import ingredients from '../data/ingredients'
import './ShoppingList.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations.css'

const mapStateToProps = state => ({
  session: state.currentUserData.session,
  shoppingList: state.favourite.shoppingList
})

const mapDispatchToProps = dispatch => ({
  fetchShoppingList: (userId, accessToken) =>
    dispatch(fetchShoppingList(userId, accessToken))
})

class NeededIngredient extends React.Component {

  componentWillMount() {
    this.props.fetchShoppingList(this.props.session.userId, this.props.session.id)
  }

  render() {
    return (
        <ReactCSSTransitionGroup
            transitionName="fadeAllRecipes"
            transitionEnterTimeout={0}
            transitionAppearTimeout={400}
            transitionLeaveTimeout={0}
            transitionAppear={true}>
      <Col className="shoppingList" xs={12} md={6} mdOffset={3}>
        <h3 className="shoppingListTitle">Lista zakupów:</h3>
        <ReactCSSTransitionGroup
            transitionName="zoomIn"
            transitionEnterTimeout={0}
            transitionAppearTimeout={300}
            transitionLeaveTimeout={0}
            transitionAppear={true}>
          <div>


        {
          this.props.session !== null ?
            <table className="shop-products-table">

              <tbody>
              {this.props.shoppingList.map(
                ingredientId =>
                ingredients.find(
                  ingredient =>
                  ingredient.id === ingredientId
                )
              ).map(
                item =>
                  <tr key={item.id}>
                    <td>
                      <img src={item.img} height={50} alt="ingredient"/>
                    </td>
                    <td>
                      <span className="ingredient-name ingredientNameShoppingList"> {item.name.toUpperCase()}</span>
                    </td>
                  </tr>
              )}
              </tbody>
            </table>:
            <div>
              <p>Zaloguj się</p>
            </div>
        }
          </div>
        </ReactCSSTransitionGroup>
        <img className="printer" title="wydrukuj listę" src="http://pl.seaicons.com/wp-content/uploads/2016/09/printer-1-icon.png" alt="printer" />
      </Col>
        </ReactCSSTransitionGroup>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NeededIngredient)
