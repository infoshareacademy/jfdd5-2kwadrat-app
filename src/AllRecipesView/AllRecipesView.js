import React from 'react'
import {recipes} from '../data'
import {Image, Col} from 'react-bootstrap'

export default (props) => (
  <div>
    <h1>RecipeView</h1>
    {
      recipes.map(recipe => {
          return (
            <Col key={recipe.id} xs={12} sm={6} md={4}>
              <h2>{recipe.name}</h2>
              <Image src={recipe.image}/>
            </Col>
          )
        }
      )
    }
  </div>
)