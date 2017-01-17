import {
  FETCH_FAV_RECIPES__SUCCES,
  FETCH_FAV_RECIPES__BEGIN,
  FETCH_SHOPPING_LIST__SUCCES,
  FETCH_SHOPPING_LIST__BEGIN

}from './actionTypes'

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
    case FETCH_SHOPPING_LIST__SUCCES:
      return {
        ...state,
        shoppingList: action.shoppingListIds
      }
    default:
      return state
  }
}