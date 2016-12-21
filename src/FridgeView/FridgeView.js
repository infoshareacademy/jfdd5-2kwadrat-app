import React from 'react'
import './styles.css'
import {ingredients} from '../data'
import {FilteredRecpiesView} from './FridgeView'

import {Image, Col, Row} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  selectedIngredients: state.selectedIngredients.selectedIngredients
})

const mapDispatchToProps = dispatch => ({
  addIngredient: (ingredient) => dispatch({
    type: 'ADD_SELECTED_INGREDIENT',
    ingredient: ingredient

  }),
  removeIngredient: (ingredient) => dispatch({
    type: 'REMOVE_SELECTED_INGREDIENT',
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
            <Row>
              <input onChange={(event) => this.setState({search: event.target.value})}/>
            </Row>
            {ingredients.filter(
              ingredient => ingredient.name.includes(this.state.search)
            ).slice(0, 3).map(
              ingredient => {
                return (
                  <Col key={ingredient.id} xs={12} sm={6} md={4} lg={3}>
                    <div className="ingredientFieldContent">
                      <Image src={ingredient.img} height="50px"/>
                      {ingredient.name}
                      <input
                        key={ingredient.id}
                        value={this.props.selectedIngredients.indexOf(ingredient.id) !== -1 ? 'on' : 'off'}
                        type="checkbox"
                        onChange={
                          event => {
                            if (event.target.checked === true) {
                              this.setState(
                                {
                                  ingredients: this.state.ingredients.concat(
                                    {
                                      name: ingredient.name,
                                      id: ingredient.id,
                                      img: ingredient.img
                                    })
                                },
                                () => this.props.addIngredient(ingredient)
                              )
                            } else {
                              this.setState(
                                {
                                  ingredients: this.state.ingredients.filter(
                                    item => item.id !== ingredient.id
                                  )
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
        </form>

        <Row>
          <h2>Chosen ingredients</h2>
          {
            this.state.ingredients.map(
              ingredient =>
                <Col key={ingredient.id} xs={12} sm={6} md={4} lg={3}>
                  <div className="ingredientFieldContent">
                    <Image src={ingredient.img} height="50px"/>
                    {ingredient.name}
                    <input
                      key={ingredient.id}
                      type="checkbox"
                      checked={this.props.selectedIngredients.indexOf(ingredient.id) !== -1 ? 'on' : 'off'}
                      onChange={
                        event => {
                          if (event.target.checked === false) {
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
        </Row>

        <Row>
          <button type="submit">Wyszukaj przepisy</button>
        </Row>
      </div>
    )
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(FridgeView)