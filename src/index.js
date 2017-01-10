import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import {App} from './App'

import store from './store'

import './App/NavigationView/NavigationViewStyle.css'
import {InstructionView} from './InstructionView'
import {FridgeView} from './FridgeView'
import {AllRecipesView} from './AllRecipesView'
import {RecipeView} from './RecipeView'
import {ShopsLogoView} from './ShopsLogoView'
import {IngredientView} from './IngredientView'
import {FilteredRecipesView} from './FilteredRecipesView'
import {LoginFormView} from './LoginFormView'
import {FavouriteRecipesView} from './FavouriteRecipesView'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={InstructionView}/>



        <Route path="/recipes" component={AllRecipesView}/>
        <Route path="/recipes/:recipeId" component={RecipeView} />
        <Route path="/ingredient/:ingredientId" component={IngredientView}/>
        <Route path="/filtered-recipes" component={FilteredRecipesView}/>
        <Route path="/form" component={FridgeView}/>
        <Route path="/login" component={LoginFormView}/>
        <Route path="/shops" component={ShopsLogoView}/>
        <Route path="/favourite-recipes" component={FavouriteRecipesView}/>


      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
