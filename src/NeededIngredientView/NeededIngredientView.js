import React from 'react'
import {Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import ingredients from '../data/ingredients'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Counter from './Counter'

import './NeededIngredientView.css'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

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
                    <div>
                      <h3 className="cos" key={item.id}
                          onClick={
                            () => {
                              props.removeSelectedIngredient(item.id)
                            }
                          }
                      >{item.name}
                      </h3>
                      <Counter/>
                    </div>
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
