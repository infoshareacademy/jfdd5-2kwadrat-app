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
          <Link to={'/'}><button href='/recipes'>Wstecz</button></Link>
            <h1>DUPA</h1>
            <h3>
                {
                    newRecipesArray.filter(
                        recipe =>
                        recipe.numberOfFittedIngredients === 3
                    ).map(
                        recipe =>(
                            <p> Mam wszystkie skladniki:
                                { <Link to={'/recipes/' + recipe.id}>
                                    <h2>{recipe.name}</h2>
                                    <Image src={recipe.image}/>
                                </Link>}</p>
                        )
                    )
                }

                {
                    newRecipesArray.filter(
                        recipe =>
                        recipe.numberOfFittedIngredients === 2
                    ).map(
                        recipe =>(
                            <p> Mam kilka(2) skladniki:
                                { <Link to={'/recipes/' + recipe.id}>
                                    <h2>{recipe.name}</h2>
                                    <Image src={recipe.image}/>
                                </Link>}</p>
                        )
                    )
                }

                {
                    newRecipesArray.filter(
                        recipe =>
                        recipe.numberOfFittedIngredients === 1
                    ).map(
                        recipe =>(
                            <p> Mam mało skladniki:
                                { <Link to={'/recipes/' + recipe.id}>
                                    <h2>{recipe.name}</h2>
                                    <Image src={recipe.image}/>
                                </Link>}</p>
                        )
                    )
                }
            </h3>
        </div>
    )
}

export default connect(mapStateToProps)(FilteredRecipes)