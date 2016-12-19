import React from 'react'
import {ingredients} from '../data'
import { shops } from '../data'
import {Image, Col} from 'react-bootstrap'


export default (props) => {
  const ingredientsWithId = ingredients.find(
      ingredient => ingredient.id === parseInt(props.params.ingredientId, 10)
  )

  return (
    <div>
      <Col xs={6}>
        <div key={ingredientsWithId.id}>
          <Col xs={12}>
            <h1>{ingredientsWithId.name}</h1>
            <Image src={ingredientsWithId.img}/>
            <div>
              <h3> SKLEPY: </h3>
              <ul>
                {
                  shops.filter(
                    shop => shop.ingredients.find(ingredient => ingredient.id === ingredientsWithId.id)
                  ).map(
                    shop =>
                      <li key={shop.id}>
                        {shop.name}
                      </li>
                  )
                }
              </ul>
            </div>
          </Col>
          {props.children}
        </div>
      </Col>
    </div>
  )
}
