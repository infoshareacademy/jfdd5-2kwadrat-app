import React from 'react'
import './styles.css'
import {ingredients} from '../data'

import {Checkbox, Image, Col, Row} from 'react-bootstrap'


//użyć handleSubmit; nasłuchiwać na kliknięcie checkboxa i jego odkliknięcie
//dlaczego wyskakuje w konsoli błąd o braku unikalnego ID, a mam go w setState?

export default class FridgeView extends React.Component {
  constructor() {
    super()

    this.handleSubmit = (event) => {
      event.preventDefault()
      this.setState({
        ingredients: this.state.ingredients.concat({
          id: new Date().getTime(),
          name: this.state.name
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
        ingredients: [
          {
            name: ''
          }
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <Row>
          <h1>FridgeView</h1>
          {ingredients.map(
            ingredient => {
              return (
                <Col key={ingredient.id} xs={12} sm={6} md={4} lg={3}>
                  <div className="ingredientFieldContent">
                    <Image src={ingredient.img} height="50px"/>
                    <Checkbox inline>
                      {ingredient.name}
                    </Checkbox>
                  </div>
                </Col>
              )
            }
          )}
        </Row>

        <Row>
          <button type="submit">Wyszukaj przepisy</button>
        </Row>

        <Row>
          <h2>Chosen ingredients</h2>
          {/*<ul>*/}
            {/*{*/}
              {/*this.state.ingredients.map(*/}
                {/*ingredient =>*/}
                  {/*<li key={ingredient.id}>{ingredient.name}</li>*/}
              {/*)*/}
            {/*}*/}
          {/*</ul>*/}
        </Row>
      </div>
    )
  }
}