import {ADD_EVENT_TO_CALENDAR} from './actionTypes'

export const addEventToCalendar = (event) => ({
  type: ADD_EVENT_TO_CALENDAR,
  event:event
})