import {
  REMOVE_SELECTED_INGREDIENT,
  LOGGED_IN
} from './actionTypes'

const initialState = {
  userData: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        userData: action.userData
      }
    case REMOVE_SELECTED_INGREDIENT:
      return {
        ...state,
        userData: {
          ...state,
          shoppingListIngredientsIds: state.userData.shoppingListIngredientsIds.filter(
            ingredient =>
            ingredient !== action.ingredientId
          )
        }

      }
    default:
      return state
  }
}