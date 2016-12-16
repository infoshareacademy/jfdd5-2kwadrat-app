import React from 'react'
import './styles.css'
import {ingredients} from '../data'

import {Image, Col, Row} from 'react-bootstrap'


export default class FridgeView extends React.Component {
  constructor() {
    super()

    this.handleSubmit = (event) => {
      event.preventDefault()
      this.setState({
        ingredients: this.state.ingredients.concat({
          name: this.state.ingredients.name,
          id: this.state.ingredients.id
        })
      }, function () {
        localStorage.setItem('my-app-state', JSON.stringify(this.state))
      })
    }

    const data = localStorage.getItem('my-app-state')
    if (data) {
      this.state = JSON.parse(data)
    } else {
      this.state = {
        ingredients: []
      }
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
                                })
                            } else {
                              this.setState(
                                {
                                  ingredients: this.state.ingredients.filter(
                                    item => item.id !== ingredient.id)
                                }
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