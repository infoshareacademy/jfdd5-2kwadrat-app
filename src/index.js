import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './index.css'
import {App} from './App'

import store from './store'

import './App/NavigationView/NavigationViewStyle.css'
import {InstructionView} from './InstructionView'
import {AllRecipesView} from './AllRecipesView'
import {RecipeView} from './RecipeView'
import {ShopsLogoView} from './ShopsLogoView'
import {IngredientView} from './IngredientView'
import {FilteredRecipesView} from './FilteredRecipesView'
import {LoginFormView} from './LoginFormView'
import {FavouriteRecipesView} from './FavouriteRecipesView'
import {default as ShoppingListView} from './ShoppingListView/ShoppingListView'
import {CalendarView} from './CalendarView'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={InstructionView}/>

        <Route path="/recipes" component={AllRecipesView}/>
        <Route path="/recipes/:recipeId" component={RecipeView} />
        <Route path="/ingredient/:ingredientId" component={IngredientView}/>
        <Route path="/filtered-recipes" component={FilteredRecipesView}/>
        <Route path="/needed-ingredient-view" component={ShoppingListView}/>

        <Route path="/login" component={LoginFormView}/>
        <Route path="/shops" component={ShopsLogoView}/>
        <Route path="/favourite-recipes" component={FavouriteRecipesView}/>
        <Route path="/calendar" component={CalendarView}/>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
