import React from 'react'
import {connect} from 'react-redux'

import {recipes} from '../data'

const mapStateToProps = state => ({
    selectedIngredients: state.selectedIngredients.selectedIngredients
})

// const arrayOfIngredientsID = () =>
//     recipes.map(
//         recipe =>
//             recipe.ingredients.map(
//                 ingredient =>
//                     ingredient.id
//             )
//     )
//


const FilteredRecipes = (props) => (
    <div>
        <h1>DUPA</h1>
            <ul>
            {
                recipes.filter(
                    recipe =>
                        recipe.ingredients.every(
                            ingredient =>
                                props.selectedIngredients.find(
                                    selected =>
                                    selected.id === ingredient.id
                                )
                        )
                ).map(
                    recipe =>
                        <li key={recipe.id}>
                            mam wszystki skladniki!!!:{recipe.name}
                        </li>
                )}

            {
                recipes.filter(
                    recipe =>
                        recipe.ingredients.find(
                            ingredient =>
                                props.selectedIngredients.find(
                                    selected =>
                                    selected.id === ingredient.id
                                )
                        )
                ).map(
                    recipe =>
                        <li key={recipe.id}>
                            mam co najmniej jeden: {recipe.name}
                        </li>
                )


            }
            </ul>
            </div>
            )

            export default connect(mapStateToProps)(FilteredRecipes)