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

    recipes.map(
        recipe => (
        {
            ...recipe,
            arrayOfIngredients: recipe.ingredients.map(
                ingredient =>
                    arrayOfSelectedIngredientsID.indexOf(ingredient.id) !== -1 ? 1 : 0
            )
        }
        )
    )
    return (
        <div>
            <h1>DUPA</h1>

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
                        <Col key={recipe.id} xs={12} sm={6} md={4}>
                            <h1>
                                MAM WSZYSTKIE SKLADNIKI
                            </h1>
                            <Link to={'/recipes/' + recipe.id}>
                                <h2>{recipe.name}</h2>
                                <Image src={recipe.image}/>
                            </Link>
                        </Col>
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
                        <Col key={recipe.id} xs={12} sm={6} md={4}>
                            <h1>Mam kikla</h1>
                            <Link to={'/recipes/' + recipe.id}>
                                <h2>{recipe.name}</h2>
                                <Image src={recipe.image}/>
                            </Link>
                        </Col>
                )


            }

        </div>
    )
}

export default connect(mapStateToProps)(FilteredRecipes)