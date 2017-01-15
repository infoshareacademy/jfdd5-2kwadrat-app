import {ADD_EVENT_TO_CALENDAR,ADD_EVENT_FROM_RECIPE_VIEW} from './actionTypes'

export const addEventToCalendar = (event) => ({
  type: ADD_EVENT_TO_CALENDAR,
  event:event
})

export const addToCalendarFromRecipeView = (recipe) => ({
  type:ADD_EVENT_FROM_RECIPE_VIEW,
  recipe:recipe
})