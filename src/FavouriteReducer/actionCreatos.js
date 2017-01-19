import {
  FETCH_FAV_RECIPES__SUCCES,
  FETCH_FAV_RECIPES__BEGIN,
  FETCH_SHOPPING_LIST__BEGIN,
  FETCH_SHOPPING_LIST__SUCCES,
  ADD_TO_SHOPPING_LIST
} from './actionTypes'

export const addRecipeToFav = (userId, accessToken, ingredientId) => {
  return dispatch => {
    dispatch({type: ADD_TO_SHOPPING_LIST})
    fetch(
      'https://salty-plateau-32425.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + accessToken,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "itemId":ingredientId,
          "itemType": "recipe",
          "ownerId": 7
        })
      }
    )
  }
}

export const addToShoppingList = (userId, accessToken, ingredientId) => {
  return dispatch => {
    dispatch({type: ADD_TO_SHOPPING_LIST})
    fetch(
      'https://salty-plateau-32425.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + accessToken,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "itemId":ingredientId,
          "itemType": "ingredient",
          "ownerId": 7
        })
      }
    )
  }
}

export const fetchFavouriteRecipes = (userId, accessToken) => {
  return dispatch => {
    dispatch({type: FETCH_FAV_RECIPES__BEGIN})
    fetch(
      'https://salty-plateau-32425.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + accessToken
    ).then(
      response => response.json()
    ).then(
      favoriteItems => dispatch({
        type: FETCH_FAV_RECIPES__SUCCES,
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


export const fetchShoppingList = (userId, accessToken) => {
  return dispatch => {
    dispatch({type: FETCH_SHOPPING_LIST__BEGIN})
    fetch(
      'https://salty-plateau-32425.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + accessToken
    ).then(
      response => response.json()
    ).then(
      favoriteItems => dispatch({
        type: FETCH_SHOPPING_LIST__SUCCES,
        shoppingListIds: favoriteItems.filter(
          item =>
          item.itemType === 'ingredient'
        ).map(
          item => item.itemId
        )
      })
    )
  }
}