import React from 'react'
import {connect} from 'react-redux'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {fetchFavouriteRecipes, removeRecipeFromFav} from '../FavouriteReducer/actionCreatos'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import recipes from '../data/recipes'
import MdStarOutline from 'react-icons/lib/md/star-outline'
import TiTimesOutline from 'react-icons/lib/ti/times'
import '../animations.css'
import './FavouriteRecipesView.css'


const mapStateToProps = state => ({
  session: state.currentUserData.session,
  favRecipes: state.favourite.favouriteRecipes
});

const mapDispatchProps = dispatch => ({
  fetchFavRecipes: (userId, accessToken) => dispatch(fetchFavouriteRecipes(userId, accessToken)),
  remove: (userId, token, favoriteId) => dispatch(removeRecipeFromFav(userId, token, favoriteId))
});

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
          <ReactCSSTransitionGroup
              transitionName="zoomIn"
              transitionEnterTimeout={0}
              transitionAppearTimeout={300}
              transitionLeaveTimeout={0}
              transitionAppear={true}>
            <div>
              {
                this.props.session !== null ?
                  (
                    this.props.favRecipes.map(
                        list =>
                            recipes.map(
                                function (recipe) {
                                  const recipeWithID = {
                                    ...recipe,
                                    additionalId: list.id
                                  }
                                  return recipeWithID
                                }).find(
                                recipe =>
                                recipe.id === list.itemId
                            )
                    ).map(
                      recipe =>
                        <div key={recipe.id}>
                          {
                            <Col key={recipe.id} xs={12} sm={6} md={4}>
                              <div className="recipeCard">
                                <div>
                                  <div className="removeX" title="usuń z ulubionych">
                                    <TiTimesOutline id="removeFavourite"
                                      onClick={() =>
                                          this.props.remove(this.props.session.userId, this.props.session.id, recipe.additionalId)}/>
                                  </div>

                                  <div className="favouriteStar">
                                    <MdStarOutline id="removeFrmFav"
                                       onClick={() => {
                                         this.props.favRecipes.filter(
                                             recipeId =>
                                             recipeId !== recipe.id
                                         )
                                       }
                                       }
                                    />
                                  </div>
                                </div>

                                <Link to={'/recipes/' + recipe.id}>
                                  <Image className="photo image" src={recipe.image}/>

                                  <h2>{recipe.name}</h2>

                                  <div className="icons">
                                    <div className="recipeTime">{recipe.time} <span>min</span></div>
                                    <div className="recipeDifficult">{recipe.difficult}</div>
                                  </div>
                                </Link>
                              </div>
                            </Col>
                          }
                        </div>
                    )
                  ):
                    <h1>Zaloduj się by wyświetlić listę</h1>
              }
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default connect(mapStateToProps, mapDispatchProps)(FavouriteRecipesView)