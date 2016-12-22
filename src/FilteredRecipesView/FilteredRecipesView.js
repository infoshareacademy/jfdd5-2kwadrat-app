import React from 'react'
import {connect} from 'react-redux'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'


import {recipes} from '../data'

const mapStateToProps = state => ({
    selectedIngredients: state.selectedIngredients.selectedIngredients
})

const arrayOfIngredientsID =
    recipes.map(
        recipe =>
            recipe.ingredients.map(
                ingredient =>
                    ingredient.id
            )
    )


const FilteredRecipes = (props) => {

    const arrayOfSelectedIngredientsID =
        props.selectedIngredients.map(
            selected =>
                selected.id
        )

    const newRecipesArray = recipes.map(
        recipe => (
        {
            ...recipe,
            numberOfFittedIngredients: parseInt(recipe.ingredients.map(
                ingredient =>
                    arrayOfSelectedIngredientsID.indexOf(ingredient.id) !== -1 ? 1 : 0
            ).reduce((prev, next)=>
                prev + next
                , 0))
        }
        )
    )
    return (
        <div>
            <h1>DUPA</h1>
            {/*{*/}
                {/*newRecipesArray.map(*/}
                    {/*recipe => {*/}
                        {/*return*/}
                        {/*switch (recipe.numberOfFittedIngredients) {*/}
                            {/*case 1:*/}
                                {/*return {}*/}
                            {/*case 2:*/}
                                {/*return {}*/}
                            {/*case 3:*/}
                                {/*return {}*/}
                            {/*default:*/}
                                {/*return state*/}
                        {/*}*/}
                    {/*})*/}
            {/*}*/}
        </div>
    )
}

export default connect(mapStateToProps)(FilteredRecipes)