import React from 'react'
import {connect} from 'react-redux'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'

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

  componentWillMount () {
    this.props.fetchFavRecipes(this.props.session.userId, this.props.session.id)
  }

  render(){
    return (
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
                  <h3 key={recipe.id}>{
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
                    </Col>}</h3>
              )
            )
            :
            <h1>Zaloduj się by wyświetlić listę</h1>
        }
      </div>
    )
  }

}


export default connect(mapStateToProps,mapDispatchProps)(FavouriteRecipesView)