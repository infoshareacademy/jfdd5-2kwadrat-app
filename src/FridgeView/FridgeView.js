import React from 'react'
import './styles.css'
import {ingredients} from '../data'

import {Checkbox, Image, Col} from 'react-bootstrap'

export default () => (
  <div>
    <h1>FridgeView</h1>
    {
      ingredients.map(
        ingredient => {
          return (
            <Col key={ingredient.id} className="ingredientField" xs={12} sm={6} md={4} lg={3}>
              <Image src={ingredient.img} height="50px"/>
              <Checkbox inline>
                {ingredient.name}
              </Checkbox>
            </Col>
          )
        }
      )
    }
  </div>
)