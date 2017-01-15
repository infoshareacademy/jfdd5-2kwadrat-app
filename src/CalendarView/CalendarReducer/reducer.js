import {ADD_EVENT_TO_CALENDAR,ADD_EVENT_FROM_RECIPE_VIEW} from './actionTypes'

const initialState = ({
  calendarEvents:[],
  presentEventTitle:null
})

export default (state = initialState, action = {}) => {
  switch(action.type){
    case ADD_EVENT_TO_CALENDAR:
      return {
        ...state,
        calendarEvents : action.event
      }
    case ADD_EVENT_FROM_RECIPE_VIEW:
      return {
        ...state,
        presentEventTitle: action.recipe.name
      }
    default:
      return state
  }
}

