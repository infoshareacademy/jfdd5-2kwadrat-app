import React from 'react'
import {Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import ingredients from '../data/ingredients'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {removeSelectedIngredient} from '../LoginFormView/UsersReducer/actionCreators'
//import {Counter} from './Counter'

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
          <div>
            <ReactCSSTransitionGroup
              transitionName="slide"
              transitionLeaveTimeout={400}>
              {
                props.user.shoppingListIngredientsIds.map(
                  ingredientId =>
                    ingredients.find(
                      ingredient =>
                      ingredient.id === ingredientId
                    )
                ).map(
                  item =>

                    <h3 className="cos" key={item.id}
                        onClick={
                          () => {
                            props.removeSelectedIngredient(item.id)
                          }
                        }
                    >{item.name}
                    </h3>
                )
              }
            </ReactCSSTransitionGroup>
          </div>
          :
          <div>
            <p>Zaloguj się</p>
          </div>
      }
    </Col>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(NeededIngredient)
