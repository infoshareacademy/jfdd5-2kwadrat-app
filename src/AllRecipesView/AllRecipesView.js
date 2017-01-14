import React from 'react'
import './AllRecipesViewStyles.css'
import {recipes} from '../data'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default (props) => (
  <div className="wrapper" >
    {props.children}
    {
      recipes.map(recipe => {
          return (

            <Col key={recipe.id} xs={12} sm={6} md={4}>
              <ReactCSSTransitionGroup
                  transitionName="route"
                  transitionEnterTimeout={100}
                  transitionAppearTimeout={100}
                  transitionAppear={true}>
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
              </ReactCSSTransitionGroup>
            </Col>
          )
        }
      )
    }

  </div>
)