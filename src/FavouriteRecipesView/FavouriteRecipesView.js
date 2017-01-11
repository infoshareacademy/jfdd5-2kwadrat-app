import React from 'react'
import {connect} from 'react-redux'

import recipes from '../data/recipes'

const mapStateToProps = state => ({
  userId: state.loggedInData.loggedInUserId,
  user: state.loggedInData.loggedUserData
})


 const FavouriteRecipesView =(props) => {

   return (
     <div>
       <h1>Ulubione przepisy:</h1>
       {
         typeof props.userId === 'number' ?
           (
             props.user.favouritesRecipesIds.map(
               recipeId =>
               recipes.find(
                 recipe =>
                 recipe.id === recipeId
               )
             ).map(
               item =>
               <h3 key={item.id}>{item.name}</h3>
             )
           )
         :
           <h1>Zaloduj się by wyświetlić listę</h1>
       }
     </div>
   )
 }


export default connect(mapStateToProps)(FavouriteRecipesView)