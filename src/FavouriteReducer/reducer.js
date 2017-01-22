import {
  FETCH_FAV_RECIPES__SUCCES,
  FETCH_SHOPPING_LIST__SUCCES,
  FETCH_EVENTS__SUCCES } from './actionTypes'

const initialState = {
  favouriteRecipes: [],
  shoppingList: [],
  calendarEvents: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAV_RECIPES__SUCCES:
      return {
        ...state,
        favouriteRecipes: action.favoriteRecipesId
      };
    case FETCH_SHOPPING_LIST__SUCCES:
      return {
        ...state,
        shoppingList: action.shoppingListIds
      };
    case FETCH_EVENTS__SUCCES:
      return {
        ...state,
        calendarEvents: action.events
      };
    default:
      return state
  }
}