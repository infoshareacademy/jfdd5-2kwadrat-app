import React from 'react'
import {Image, Col} from 'react-bootstrap'
import {recipes} from '../data'




export default (props) => {
  const recipeWithId = recipes.find(
    recipe => recipe.id === parseInt(props.params.recipeId, 10)
  )
  return (
    <div key = {recipeWithId.id}>
      <Col xs={12}>
        <h1>{recipeWithId.name}</h1>
        <Image src={recipeWithId.image}/>
        <p>{recipeWithId.description}</p>
      </Col>
    </div>
  )
}