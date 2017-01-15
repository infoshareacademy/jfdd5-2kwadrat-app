import {ADD_EVENT_TO_CALENDAR,ADD_RECIPE_TITLE,REMOVE_RECIPE_TITLE} from './actionTypes'

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
    case ADD_RECIPE_TITLE:
      return {
        ...state,
        presentEventTitle: action.recipe.name
      }
    case REMOVE_RECIPE_TITLE:
      return {
        ...state,
        presentEventTitle: null
      }
    default:
      return state
  }
}

