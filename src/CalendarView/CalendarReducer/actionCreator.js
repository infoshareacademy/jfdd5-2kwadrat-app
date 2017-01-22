import {ADD_EVENT_TO_CALENDAR, ADD_RECIPE_TITLE, REMOVE_RECIPE_TITLE} from './actionTypes'

export const addEventToCalendar = (event) => ({
  type: ADD_EVENT_TO_CALENDAR,
  event: event
});

export const addToCalendarFromRecipeView = (recipe) => ({
  type: ADD_RECIPE_TITLE,
  recipe: recipe
});

export const removeRecipeTitle = () => ({
  type: REMOVE_RECIPE_TITLE
});