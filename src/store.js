import { createStore, combineReducers } from 'redux'
import { reducer as shopsReducer } from './ShopsLogoView'
import { reducer as ingredientsReducer } from './FridgeView'
import  loginFormReducer  from './LoginFormView/LoginFormReducer/reducer'

const reducer = combineReducers({
   shopsData: shopsReducer,
   selectedIngredients: ingredientsReducer,
   loggedInData: loginFormReducer


})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store