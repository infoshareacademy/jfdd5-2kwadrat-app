import {
  REMOVE_SELECTED_INGREDIENT,
  LOGGED_IN, ADD_SELECTED_INGREDIENT
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
          ...state.userData,
          shoppingListIngredientsIds: state.userData.shoppingListIngredientsIds.filter(
            ingredient =>
            ingredient !== action.ingredientId
          )
        }
      }
    case ADD_SELECTED_INGREDIENT:
      return {
        ...state,
        userData: {
          ...state.userData,
          shoppingListIngredientsIds: state.userData.shoppingListIngredientsIds.concat(action.id)
        }
      }
    default:
      return state
  }
}