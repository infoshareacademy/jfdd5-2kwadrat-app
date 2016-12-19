import React from 'react'
import {ingredients} from '../data'
import {shops} from '../data'
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

                <ul key={ingredientsWithId.id}>
                  {

                    shops.find(
                        arrayOfIngredients => arrayOfIngredients.ingredients.map(
                        item => item.ingredientId === ingredientsWithId.id).ingredientId // :(
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
