import React from 'react'
import {Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import ingredients from '../data/ingredients'

import {removeSelectedIngredient} from '../LoginFormView/UsersReducer/actionCreators'


import './NeededIngredientView.css'

const mapStateToProps = state => ({
  userId: state.loggedInData.loggedInUserId,
  user: state.loggedUser.userData
})

const mapDispatchToProps = dispatch => ({

  removeSelectedIngredient: (ingredient) => dispatch(
    removeSelectedIngredient(ingredient))
})

const NeededIngredient = (props) => {

  return (
    <Col xs={12} md={6} mdOffset={3} className="neededIngredientContainer">
      <div className="cos">Lista zakupów</div>
      {
        typeof props.userId === 'number' ?
          <p>
            {
              props.user.shoppingListIngredientsIds.map(
                ingredientId =>
                  ingredients.find(
                    ingredient =>
                    ingredient.id === ingredientId
                  )
              ).map(
                item =>
                  <h3 key={item.id}
                      onClick={
                        () => {
                          props.removeSelectedIngredient(item.id)
                        }
                      }
                  >{item.name}</h3>
              )
            }
          </p> :

          <p>Zaloguj się</p>
      }
    </Col>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(NeededIngredient)
