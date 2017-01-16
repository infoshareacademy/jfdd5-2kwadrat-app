import React from 'react'
import './AllRecipesViewStyles.css'
import {recipes} from '../data'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations.css'

export default (props) => (
  <div className="wrapper" >
    {props.children}
    {
      recipes.map(recipe => {
          return (
            <Col key={recipe.id} xs={12} sm={6} md={4}>
              <ReactCSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={400}
                  transitionAppearTimeout={400}
                  transitionLeaveTimeout={400}
                  transitionAppear={true}>
              <div key='recipes' className="recipeCard">
                <Link to={'/recipes/' + recipe.id}>
                  <Image className="photo image" src={recipe.image}/>
                  <h2>{recipe.name}</h2>
                </Link>
                <div className="icons">
                  <div className="recipeTime">{recipe.time + " min"}</div>
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