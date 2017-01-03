import React from 'react'
import {connect} from 'react-redux'
import {Image, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import './FilteredRecipesView.css'


import {recipes} from '../data'

const mapStateToProps = state => ({
  selectedIngredients: state.selectedIngredients.selectedIngredients
})

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
        numberOfFittedIngredients: recipe.ingredients.map(
          ingredient =>
            arrayOfSelectedIngredientsID.indexOf(ingredient.id) !== -1 ? 1 : 0
        ).filter(
          item =>
          item === 1
        )
      }
    )
  )
  newRecipesArray.sort((a, b) =>
    a.ingredients.length - b.ingredients.length
  )
  newRecipesArray.sort(
    (a, b) =>
    (a.ingredients.length - a.numberOfFittedIngredients.length) - ( b.ingredients.length - b.numberOfFittedIngredients.length)
  )

  console.log(newRecipesArray)

  return (
    <div>
      <div className="button-back">
        <Link to={'/'}><Button>Wstecz</Button></Link>
      </div>
      {
        arrayOfSelectedIngredientsID.length !== 0 ?
          newRecipesArray.map(
            recipe => (
              <Link key={recipe.id} to={'/recipes/' + recipe.id}>
                <Col key={recipe.id} xs={12} sm={6} md={4}>
                  <div className="recipeCard recipeCardHeight">
                    <Image className="photo image" src={recipe.image}/>
                    <h2>{recipe.name}</h2>
                    { recipe.numberOfFittedIngredients.length === recipe.ingredients.length ?
                      <p className="missing-ingredients-info">
                        Masz wszystkie składniki! Do dzieła
                      </p> :

                      <p className="missing-ingredients-info">
                        Masz {recipe.numberOfFittedIngredients.length}
                        {recipe.numberOfFittedIngredients.length === 1 ?
                          ' składnik' :
                          recipe.numberOfFittedIngredients.length === 0 || recipe.numberOfFittedIngredients.length > 4 ?
                            ' składników' :
                            ' składniki'
                        }
                      </p>
                    }
                    {recipe.numberOfFittedIngredients.length === recipe.ingredients.length ?
                      '' :
                      <p className="missing-ingredients-info">
                        Brakuje Ci {recipe.ingredients.length - recipe.numberOfFittedIngredients.length }
                        skladników
                      </p>
                    }

                    <div className="icons">
                      <div className="recipeTime">{recipe.time}</div>
                      <div className="recipeDifficult">{recipe.difficult}</div>
                    </div>
                  </div>
                </Col>
              </Link>
            )
          ) :
          <h1>Pokaż co masz w lodówce ; )</h1>
      }
    </div>
  )
}

export default connect(mapStateToProps)(FilteredRecipes)