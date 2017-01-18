import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunkMiddleware from 'redux-thunk'

import {reducer as shopsReducer} from './ShopsLogoView'
import {reducer as ingredientsReducer} from './FridgeView'
import {reducer as filteredRecipesViewReducer} from './FilteredRecipesView'
import calendarReducer from './CalendarView/CalendarReducer/reducer'
import {default as userReducer} from './LoginFormView/CurrentUserReducer/reducer'
import favouriteReducer from './FavouriteReducer/reducer'

const reducer = combineReducers({
  shopsData: shopsReducer,
  filteredRecipesViewReducer: filteredRecipesViewReducer,
  selectedIngredients: ingredientsReducer,
  calendarData: calendarReducer,
  currentUserData: userReducer,
  favourite : favouriteReducer


})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions (thunks) in addition to objects with 'type' attribute
  ),
  persistState(['currentUserData'])
)

const store = createStore(reducer, enhancer);


export default store