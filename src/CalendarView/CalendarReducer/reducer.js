import {ADD_EVENT_TO_CALENDAR} from './actionTypes'

const initialState = ({
  calendarEvents:[]
})

export default (state = initialState, action = {}) => {
  switch(action.type){
    case ADD_EVENT_TO_CALENDAR:
      return {
        ...state,
        calendarEvents : state.calendarEvents.concat(action.event)
      }
    default:
      return state
  }
}

