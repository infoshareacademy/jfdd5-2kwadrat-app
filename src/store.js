import { createStore, combineReducers } from 'redux'
import { reducer as shopsReducer } from './AvailabilityView/ShopsLogoView'
import { reducer as ingredientsReducer } from './FridgeView'

const reducer = combineReducers({
   shopsData : shopsReducer,
   selectedIngredients: ingredientsReducer

})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store