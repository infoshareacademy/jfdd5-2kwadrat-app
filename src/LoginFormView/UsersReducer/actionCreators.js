import {
  REMOVE_FAVOURITE_RECIPE,
  ADD_FAVOURITE_RECIPE,
  REMOVE_SELECTED_INGREDIENT,
  ADD_SELECTED_INGREDIENT
} from './actionTypes'

export const removeSelectedIngredient = () => ({
  type:REMOVE_SELECTED_INGREDIENT
})

export const addSelectedIngredient = () => ({
  type:ADD_SELECTED_INGREDIENT
})

export const addFavouriteRecipe= () => ({
  type:ADD_FAVOURITE_RECIPE
})

export const removeFavouriteRecipe = () => ({
  type:REMOVE_FAVOURITE_RECIPE
})
