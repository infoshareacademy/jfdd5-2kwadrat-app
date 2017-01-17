import {FETCH_FAV_RECIPES__SUCCES, FETCH_FAV_RECIPES__BEGIN} from './actionTypes'

export const fetchFavouriteRecipes = (userId, accessToken) => {
  return dispatch => {
    dispatch({type:FETCH_FAV_RECIPES__BEGIN})
    fetch(
      'http://localhost:3001/api/users/' + userId + '/favoriteItems?access_token=' + accessToken
    ).then(
      response => response.json()
    ).then(
      favoriteItems => dispatch({
        type:FETCH_FAV_RECIPES__SUCCES,
        favoriteRecipesId: favoriteItems.filter(
          item =>
          item.itemType === 'recipe'
        ).map(
          item => item.itemId
        )
      })
    )
  }
}