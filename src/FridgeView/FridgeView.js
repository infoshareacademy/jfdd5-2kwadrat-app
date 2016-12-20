import React from 'react'
import './styles.css'
import {ingredients} from '../data'

import {Image, Col, Row} from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  selectedIngredients: state.ingredientsReducer
})

const mapDispatchToProps = dispatch => ({
  addIngredient: (ingredient) => dispatch({
    type : 'ADD_SELECTED_INGREDIENT',
    ingredient: ingredient

  }),
  removeIngredient :(ingredient) => dispatch({
    type : 'REMOVE_SELECTED_INGREDIENT',
    ingredientId: ingredient

  })
})


 class FridgeView extends React.Component {
  constructor() {
    super()

    this.handleSubmit = (event) => {
      event.preventDefault()
    }


      this.state = {
        ingredients: []
      }

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <h1>FridgeView</h1>
            {ingredients.map(
              ingredient => {
                return (
                  <Col key={ingredient.id} xs={12} sm={6} md={4} lg={3}>
                    <div className="ingredientFieldContent">
                      <Image src={ingredient.img} height="50px"/>
                      {ingredient.name}
                      <input
                        key={ingredient.id}
                        type="checkbox"
                        onChange={
                          event => {
                            if (event.target.checked === true) {
                              this.setState(
                                {
                                  ingredients: this.state.ingredients.concat(
                                    {
                                      name: ingredient.name,
                                      id: ingredient.id
                                    })
                                },
                                  () => this.props.addIngredient(ingredient)
                                  )


                            } else {
                              this.setState(
                                {
                                  ingredients: this.state.ingredients.filter(
                                    item => item.id !== ingredient.id)
                                },
                                  () => this.props.removeIngredient(ingredient.id)

                              )
                            }
                          }
                        }
                      />
                    </div>
                  </Col>
                )
              }
            )}
          </Row>

          <Row>
            <button type="submit">Wyszukaj przepisy</button>
          </Row>
        </form>

        <Row>
          <h2>Chosen ingredients</h2>
          <ul>
            {
              this.state.ingredients.map(
                ingredient =>
                  <li key={ingredient.id}>{ingredient.name}</li>
              )
            }
          </ul>
        </Row>
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FridgeView)
