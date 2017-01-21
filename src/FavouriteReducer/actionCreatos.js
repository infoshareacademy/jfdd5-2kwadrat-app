import {
  FETCH_FAV_RECIPES__SUCCES,
  FETCH_FAV_RECIPES__BEGIN,
  FETCH_SHOPPING_LIST__BEGIN,
  FETCH_SHOPPING_LIST__SUCCES,
  ADD_TO_SHOPPING_LIST,
  ADD_RECIPE_TO_FAV,
  ADD_CALENDAR_EVENT,
  FETCH_EVENTS__BEGIN,
  FETCH_EVENTS__SUCCES,
  REMOVE_INGREDIENT__BEGIN,
  REMOVE_INGREDIENT__FAIL,
  REMOVE_INGREDIENT__SUCCESS
} from './actionTypes'



export const addRecipeToFav = (userId, accessToken, ingredientId) => {
  return dispatch => {
    dispatch({type: ADD_RECIPE_TO_FAV})
    fetch(
      'https://salty-plateau-32425.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + accessToken,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "itemId": ingredientId,
          "itemType": "recipe",
          "ownerId": userId
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
          "itemId": ingredientId,
          "itemType": "ingredient",
          "ownerId": userId
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
          function(item){
            var ingredient = {
              id:item.id,
              itemId:item.itemId
            }
            return ingredient
          }
        )
      })
    )
  }
}


export const fetchCalendarEvents = (userId, accessToken) => {
  return dispatch => {
    dispatch({type: FETCH_EVENTS__BEGIN})
    fetch(
      'https://salty-plateau-32425.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + accessToken
    ).then(
      response => response.json()
    ).then(
      favoriteItems => dispatch({
        type: FETCH_EVENTS__SUCCES,
        events: favoriteItems.filter(
          item =>
          item.itemType === 'event'
        ).map(
          function(item){
            var event = {
              title: item.title,
              end: new Date(item.end),
              start: new Date(item.start)
            }
            return event
          }
        )
      })
    )
  }
}


export const addCalendarEvent = (userId, accessToken, event) => {
  return dispatch => {
    dispatch({type: ADD_CALENDAR_EVENT})
    fetch(
      'https://salty-plateau-32425.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + accessToken,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "itemId": 3,
          "title": event.title,
          "start": event.start,
          "end": event.end,
          "itemType": "event",
          "ownerId": userId
        })
      }
    )
  }
}

export const removeFromShoppingList = (userId, token, favoriteId) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_INGREDIENT__BEGIN
    })

    fetch('https://salty-plateau-32425.herokuapp.com/api/users/' + userId + '/favoriteItems/' + favoriteId + '?access_token=' + token, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(
      response => {
        if (response.status === 204) {
          dispatch({
            type: REMOVE_INGREDIENT__SUCCESS
          })

        }
        else {
          return response.json().then(
            error => dispatch({type: REMOVE_INGREDIENT__FAIL, error: error})
          )
        }
      }
    )
  }
}