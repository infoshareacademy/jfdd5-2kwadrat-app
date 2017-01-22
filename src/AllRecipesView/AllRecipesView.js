import React from 'react'
import {recipes} from '../data'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations.css'
import './AllRecipesViewStyles.css'
import '../index.css'


export default (props) => (
  <div className="wrapper">
  {props.children}

  {
    recipes.map(recipe => {
      return (
      <ReactCSSTransitionGroup
        transitionName="fadeAllRecipes"
        transitionEnterTimeout={0}
        transitionAppearTimeout={400}
        transitionLeaveTimeout={0}
        transitionAppear={true}>
        <Col key={recipe.id} xs={12} sm={6} md={4}>
          <Link to={'/recipes/' + recipe.id}>
            <ReactCSSTransitionGroup
              transitionName="zoomIn"
              transitionEnterTimeout={0}
              transitionAppearTimeout={300}
              transitionLeaveTimeout={0}
              transitionAppear={true}>
                <div key='recipes' className="recipeCard">
                  <Image className="photo image" src={recipe.image}/>
                    <h2>{recipe.name}</h2>

                    <div className="icons">
                      <div className="recipeTime">{recipe.time + " min"}</div>

                      <div className="recipeDifficult">{recipe.difficult}</div>
                    </div>
                 </div>
            </ReactCSSTransitionGroup>
          </Link>
        </Col>
      </ReactCSSTransitionGroup>
      )
    }
    )
  }
  </div>
)