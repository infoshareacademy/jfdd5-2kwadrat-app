import React from 'react'
import './styles.css'
import {ingredients} from '../data'

import {Checkbox, Image, Col, Row} from 'react-bootstrap'

export default () => (
  <div>
    <Row>
      <h1>FridgeView</h1>
      {
        ingredients.map(
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
        )
      }
    </Row>
    <Row>
      <button type="submit">Wyszukaj przepisy</button>
    </Row>
  </div>
)