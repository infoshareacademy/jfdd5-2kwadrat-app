import React from 'react'
import { connect } from 'react-redux'

import { recipes } from '../data'

const mapStateToProps = state => ({
    selectedIngredients: state.selectedIngredients.selectedIngredients
})


const FilteredRecipes = (props) => (
    <div>
  <h1>DUPA</h1>
      
    </div>
)

export default connect(mapStateToProps)(FilteredRecipes)