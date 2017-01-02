import React from 'react'
import './AllRecipesViewStyles.css'
import {recipes} from '../data'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'

export default (props) => (
  <div className="wrapper">
    {
      recipes.map(recipe => {
          return (

            <Col key={recipe.id} xs={12} sm={6} md={4}>
              <div className="recipeCard">
              <Link to={'/recipes/' + recipe.id}>
                <Image className="photo image" src={recipe.image}/>
                <h2>{recipe.name}</h2>

              </Link>
                <div className="icons">
                  <div className="recipeTime">{recipe.time}</div>
                  <div className="recipeDifficult">{recipe.difficult}</div>
                </div>
              </div>
            </Col>
          )
        }
      )
    }
    {props.children}
  </div>
)