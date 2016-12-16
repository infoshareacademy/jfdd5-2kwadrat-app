import React from 'react'
import {Image, Col} from 'react-bootstrap'
import {recipes} from '../data'
import {ingredients} from '../data'


export default (props) => {
  const recipeWithId = recipes.find(
    recipe => recipe.id === parseInt(props.params.recipeId, 10)
  )
  return (
    <div key={recipeWithId.id}>
      <Col xs={12}>
        <h1>{recipeWithId.name}</h1>
        <Image src={recipeWithId.image}/>
        <p>{recipeWithId.description} </p>
        <div>
          <h3> SKŁADNIKI: </h3>
          <ul>
            {
              recipeWithId.ingredients.map(
                ingredient =>
                  <li key={ingredient.id}>
                    {ingredient.id} {ingredient.ingredientAmount} {ingredient.unitMeasure}
                    <p key={ingredient.id}>{ingredients.find( item => item.id === ingredient.id ).name}</p>
                  </li>
              )
            }
          </ul>
        </div>
      </Col>
    </div>
  )
}