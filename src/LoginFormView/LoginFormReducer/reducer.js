import {LOGGED_IN,LOGIN_TRIES,LOG_OUT, REMOVE_SELECTED_INGREDIENT} from './actionTypes'

const initialState = {
  loggedInStatus: false,
  loggedInUserId: null,
  loggingTests: false,
  loggedUserData:null,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedInStatus: true,
        loggingTests:false,
        loggedInUserId: action.userData.id,
        loggedUserData: action.userData
      }
    case LOGIN_TRIES:
      return{
        ...state,
        loggingTests: true
      }
    case LOG_OUT:
      return{
          ...state,
        loggedInStatus:false
      }
    case REMOVE_SELECTED_INGREDIENT:
      return {
        ...state,
        loggedUserData: {
          ...state.loggedUserData,
          shoppingListIngredientsIds: state.loggedUserData.shoppingListIngredientsIds.filter(ingredient =>
            ingredient !== action.ingredientId
          )
        }
      }

    default:
      return state
  }
}
