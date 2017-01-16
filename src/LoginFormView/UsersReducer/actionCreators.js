import {
  REMOVE_FAVOURITE_RECIPE,
  ADD_FAVOURITE_RECIPE,
  REMOVE_SELECTED_INGREDIENT,
  ADD_SELECTED_INGREDIENT,
  LOGGED_IN
} from './actionTypes'

export const addSelectedIngredient = (ingredientId) => ({
  type: ADD_SELECTED_INGREDIENT,
  id: ingredientId
})

export const addFavouriteRecipe = () => ({
  type: ADD_FAVOURITE_RECIPE
})

export const removeFavouriteRecipe = () => ({
  type: REMOVE_FAVOURITE_RECIPE
})

export const loggedIn = (user) => ({
  type: LOGGED_IN,
  userData: user
})
export const removeSelectedIngredient = (ingredient) => ({
  type: REMOVE_SELECTED_INGREDIENT,
  ingredientId: ingredient
})