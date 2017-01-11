import { createStore, combineReducers } from 'redux'
import { reducer as shopsReducer } from './ShopsLogoView'
import { reducer as ingredientsReducer } from './FridgeView'
import { reducer as filteredRecipesViewReducer } from './FilteredRecipesView'
import  loginFormReducer  from './LoginFormView/LoginFormReducer/reducer'
import calendarReducer from './CalendarView/CalendarReducer/reducer'

const reducer = combineReducers({
  shopsData : shopsReducer,
  selectedIngredients: ingredientsReducer,
  filteredRecipesViewReducer: filteredRecipesViewReducer
   selectedIngredients: ingredientsReducer,
   loggedInData: loginFormReducer


})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store