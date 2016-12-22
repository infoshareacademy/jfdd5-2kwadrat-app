import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {App} from './App'
import {Provider} from 'react-redux'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

import store from './store'


import {FridgeView} from './FridgeView'
import {AllRecipesView} from './AllRecipesView'
import {RecipeView} from './RecipeView'
import {ShopsLogoView} from './ShopsLogoView'
import {IngredientView} from './IngredientView'
import {FilteredRecipesView} from './FilteredRecipesView'




ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={FridgeView}/>

        <Route path="/recipes" component={AllRecipesView}/>
        <Route path="/recipes/:recipeId" component={RecipeView}/>
        <Route path="/ingredient/:ingredientId" component={IngredientView}/>
        <Route path="/filtered-recipes" component={FilteredRecipesView}/>

        <Route path="/shops" component={ShopsLogoView}/>


      </Route>
    </Router>
  </Provider>,
document.getElementById('root')
)
