import {
  FETCH_FAV_RECIPES__SUCCES,
  FETCH_FAV_RECIPES__BEGIN}
  from './actionTypes'

const initialState = {
  favouriteRecipes:[],
  shoppingList:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAV_RECIPES__SUCCES:
      return {
        ...state,
        favouriteRecipes: action.favoriteRecipesId
      }
    default:
      return state
  }
}