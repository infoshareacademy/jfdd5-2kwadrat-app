import React from 'react'
import './RecipeViewStyle.css'
import {Image, Col} from 'react-bootstrap'
import {recipes} from '../data'
import {ingredients} from '../data'
import {Link} from 'react-router'
import {connect} from 'react-redux'
const mapStateToProps = state => ({
    selectedIngredients: state.selectedIngredients.selectedIngredients
})


export default connect(mapStateToProps)((props) => {
    const recipeWithId = recipes.find(
        recipe => recipe.id === parseInt(props.params.recipeId, 10)
    )
    const arrayOfSelectedIngredientsID =
        props.selectedIngredients.map(
            selected =>
                selected.id
        )

    return (
        <div key={recipeWithId.id}>
            <Col xs={12}>
                <h1>{recipeWithId.name}</h1>
                <Image className = "photo" src={recipeWithId.image}/>
                <p>{recipeWithId.description} </p>
                <div>
                    <h3> SKŁADNIKI: </h3>
                    <ul>
                        {
                            recipeWithId.ingredients.map(
                                ingredient =>
                                    <li key={ingredient.id}>
                                        {ingredient.ingredientAmount} {ingredient.unitMeasure}
                                        <p>
                                            {ingredients.find(item => item.id === ingredient.id).name}
                                        </p>

                                        <p key={ingredient.id}>
                                            {
                                                <Link to={'/ingredient/' + ingredient.id}>
                                                    { arrayOfSelectedIngredientsID.indexOf(ingredient.id) !== -1 ?
                                                        <p>Zlokalizuj wiecej {ingredient.name}</p> :
                                                        <p>Znajdz składnik</p>}
                                                </Link>
                                            }
                                        </p>
                                    </li>
                            )
                        }
                    </ul>
                </div>
            </Col>
            {props.children}
        </div>
    )
})