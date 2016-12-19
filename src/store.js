import { createStore, combineReducers } from 'redux'
import { reducer as shopsReducer } from './AvailabilityView/ShopsLogoView'

const reducer = combineReducers({
   shopsData : shopsReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store