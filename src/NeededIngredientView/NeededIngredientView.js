import React from 'react'
import {Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import ingredients from '../data/ingredients'

import {RemoveSelectedIngredient} from '../LoginFormView/LoginFormReducer/actionCreators'


import './NeededIngredientView.css'

const mapStateToProps = state => ({
  userId: state.loggedInData.loggedInUserId,
  user: state.loggedInData.loggedUserData
})

const mapDispatchToProps = dispatch => ({

  RemoveSelectedIngredient: (ingredient) => dispatch(
      RemoveSelectedIngredient(ingredient))
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
                                  props.RemoveSelectedIngredient(item.id)
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
