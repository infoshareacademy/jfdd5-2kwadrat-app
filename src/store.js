import {createStore, combineReducers} from 'redux'
import {reducer as shopsReducer} from './ShopsLogoView'
import {reducer as ingredientsReducer} from './FridgeView'
import {reducer as filteredRecipesViewReducer} from './FilteredRecipesView'
import loginFormReducer  from './LoginFormView/LoginFormReducer/reducer'
import calendarReducer from './CalendarView/CalendarReducer/reducer'
import userReducer from './LoginFormView/UsersReducer/reducer'

const reducer = combineReducers({
  shopsData: shopsReducer,
  filteredRecipesViewReducer: filteredRecipesViewReducer,
  selectedIngredients: ingredientsReducer,
  loggedInData: loginFormReducer,
  calendarData: calendarReducer,
  loggedUser: userReducer


})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store