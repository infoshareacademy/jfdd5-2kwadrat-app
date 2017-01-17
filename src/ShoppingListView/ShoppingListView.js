import React from 'react'
import {Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import {fetchShoppingList} from '../FavouriteReducer/actionCreatos'

import ingredients from '../data/ingredients'
import './ShoppingList.css'

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
      <Col xs={12} md={6} mdOffset={3} className="neededIngredientContainer">
        <h3>Musisz to kupić:</h3>
        {
          this.props.session !== null ?
            <table className="shop-products-table">
              <thead>
              <tr>
                <th> </th>
                <th>Nazwa</th>

              </tr>
              </thead>
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
                      <span className="ingredient-name"> {item.name.toUpperCase()}</span>
                    </td>
                  </tr>
              )}
              </tbody>
            </table>:
            <div>
              <p>Zaloguj się</p>
            </div>
        }
      </Col>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NeededIngredient)
