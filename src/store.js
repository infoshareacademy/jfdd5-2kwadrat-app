import { createStore, combineReducers } from 'redux'
import { reducer as shopsReducer } from './ShopsLogoView'
import { reducer as ingredientsReducer } from './FridgeView'
import { reducer as filteredRecipesViewReducer } from './FilteredRecipesView'

const reducer = combineReducers({
  shopsData : shopsReducer,
  selectedIngredients: ingredientsReducer,
  filteredRecipesViewReducer: filteredRecipesViewReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store