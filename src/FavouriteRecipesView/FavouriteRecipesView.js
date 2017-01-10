import React from 'react'
import {connect} from 'react-redux'

import recipes from '../data/recipes'

const mapStateToProps = state => ({
  userId: state.loggedInData.loggedInUserId,
  user: state.loggedInData.loggedUserData
})


 const FavouriteRecipesView =(props) => (
  <div>
  <h1>Ulubione przepisy:</h1>
    {
      typeof props.userId === 'number' ?
        <p>Przepisy:

        </p> :
        <h1>Zaloduj się by wyświetlić listę</h1>
    }
  </div>
)

export default connect(mapStateToProps)(FavouriteRecipesView)