import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {App} from './App'
import {Provider} from 'react-redux'

import store from './store'


import {FridgeView} from './FridgeView'
import {AllRecipesView} from './AllRecipesView'
import {RecipeView} from './RecipeView'
import {AvailabilityView} from './AvailabilityView'
import  {ShopView} from './AvailabilityView/ShopView'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={FridgeView}/>

        <Route path="/recipes" component={AllRecipesView}/>
        <Route path="/recipes/:recipeId" component={RecipeView}/>

        <Route path="/shops" component={AvailabilityView}>
          <Route path="/shops/:shopId" component={ShopView}/>
        </Route>

      </Route>
    </Router>
  </Provider>,
document.getElementById('root')
)
