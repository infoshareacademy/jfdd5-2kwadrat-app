import React from 'react'
import {connect} from 'react-redux'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations.css'

import {fetchFavouriteRecipes} from '../FavouriteReducer/actionCreatos'

import recipes from '../data/recipes'

const mapStateToProps = state => ({
  session: state.currentUserData.session,
  favRecipes: state.favourite.favouriteRecipes
})

const mapDispatchProps = dispatch => ({
  fetchFavRecipes: (userId, accessToken) =>
      dispatch(fetchFavouriteRecipes(userId, accessToken))
})


class FavouriteRecipesView extends React.Component {

  componentWillMount() {
    this.props.fetchFavRecipes(this.props.session.userId, this.props.session.id)
  }

  render() {
    return (
      <ReactCSSTransitionGroup
          transitionName="fadeAllRecipes"
          transitionEnterTimeout={0}
          transitionAppearTimeout={400}
          transitionLeaveTimeout={0}
          transitionAppear={true}>
        <div>
          <h1>Ulubione przepisy:</h1>
          {
            this.props.session !== null ?
              (
                this.props.favRecipes.map(
                  recipeId =>
                    recipes.find(
                        recipe =>
                        recipe.id === recipeId
                    )
                ).map(
                  recipe =>
                    <div key={recipe.id}>
                      {
                        <Col key={recipe.id} xs={12} sm={6} md={4}>

                          <div className="recipeCard">
                            <Link to={'/recipes/' + recipe.id}>
                              <Image className="photo image" src={recipe.image}/>
                              <h2>{recipe.name}</h2>
                            </Link>
                            <div className="icons">
                              <div className="recipeTime">{recipe.time} <span>min</span></div>
                              <div className="recipeDifficult">{recipe.difficult}</div>
                            </div>
                          </div>
                        </Col>
                      }
                    </div>
                )
              )
              :
              <h1>Zaloduj się by wyświetlić listę</h1>
          }
        </div>
      </ReactCSSTransitionGroup>
    )
  }

}


export default connect(mapStateToProps, mapDispatchProps)(FavouriteRecipesView)