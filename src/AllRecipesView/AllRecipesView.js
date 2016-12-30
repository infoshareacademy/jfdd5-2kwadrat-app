import React from 'react'
import './AllRecipesViewStyles.css'
import {recipes} from '../data'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'

export default (props) => (
  <div>
    <h1>RecipeView</h1>
    {
      recipes.map(recipe => {
          return (
            <Col key={recipe.id} xs={12} sm={6} md={4}>
              <Link to={'/recipes/' + recipe.id}>
                <h2>{recipe.name}</h2>
                <Image className="photo" src={recipe.image}/>
              </Link>
            </Col>
          )
        }
      )
    }
    {props.children}
  </div>
)