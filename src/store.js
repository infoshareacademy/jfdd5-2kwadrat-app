import { createStore, combineReducers } from 'redux'
import { reducer as shopReducer } from './AvailabilityView/ShopsLogoView'

const reducer = combineReducers({
   shopData : shopReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store