import {ADD_RECIPE_TITLE, REMOVE_RECIPE_TITLE} from './actionTypes'

export const addToCalendarFromRecipeView = (recipe) => ({
  type: ADD_RECIPE_TITLE,
  recipe: recipe
});

export const removeRecipeTitle = () => ({
  type: REMOVE_RECIPE_TITLE
});