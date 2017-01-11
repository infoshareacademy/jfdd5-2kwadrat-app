import React from 'react'
import {connect} from 'react-redux'
import {Image, Col, ButtonGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router'
import './FilteredRecipesView.css'
import FaArrowLeft from 'react-icons/lib/fa/arrow-left'

import {recipes} from '../data'
import { selectRecipes } from './select'

const mapStateToProps = state => ({
  selectedIngredients: state.selectedIngredients.selectedIngredients,
  filterNames: state.filteredRecipesViewReducer.filterNames
});

const mapDispatchToProps = dispatch => ({
  setFilter: (filterName) => dispatch({
    type: 'SET_FILTER',
    filterName: filterName
  }),
  resetFilters: () => dispatch({ type: 'RESET_FILTERS' })
})

const FilteredRecipes = (props) => {

  const arrayOfSelectedIngredientsID =
    props.selectedIngredients.map(
      selected =>
        selected.id
    );

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
  );
  newRecipesArray.sort((a, b) =>
    a.ingredients.length - b.ingredients.length
  );
  newRecipesArray.sort(
    (a, b) =>
    (a.ingredients.length - a.numberOfFittedIngredients.length) - ( b.ingredients.length - b.numberOfFittedIngredients.length)
  );

  console.log(newRecipesArray);

  return (
    <div>
      {
        arrayOfSelectedIngredientsID.length !== 0 ?
          <div>
            <div title="wstecz" className="button-back">
              <Link to={'/form'}><span className="btn-back"><FaArrowLeft size="40px" /></span></Link>
            </div>

            <ButtonGroup>
              <DropdownButton title="Czasochłonność" id="bg-nested-dropdown">
                <MenuItem eventKey="1" onClick={() => props.setFilter('timeShort')}>
                  krótkie
                </MenuItem>

                <MenuItem eventKey="2" onClick={() => props.setFilter('timeMedium')}>
                  średnie
                </MenuItem>

                <MenuItem eventKey="3" onClick={() => props.setFilter('timeLong')}>
                  długie
                </MenuItem>
              </DropdownButton>

              <DropdownButton title="Trudność" id="bg-nested-dropdown">
                <MenuItem eventKey="1" onClick={() => props.setFilter('difficultEase')}>
                  łatwe
                </MenuItem>

                <MenuItem eventKey="2" onClick={() => props.setFilter('difficultMedium')}>
                  średnie
                </MenuItem>

                <MenuItem eventKey="3" onClick={() => props.setFilter('difficultHard')}>
                  trudne
                </MenuItem>
              </DropdownButton>

              <Button onClick={() => props.resetFilters()}>
                Usuń filtry
              </Button>
            </ButtonGroup>
          </div>: ''
      }
      {
        arrayOfSelectedIngredientsID.length !== 0 ?
          selectRecipes(newRecipesArray, props.filterNames).map(
            recipe => {
              console.log(recipe)
              return (
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
                          Brakuje Ci tylko {recipe.ingredients.length - recipe.numberOfFittedIngredients.length }
                          {recipe.ingredients.length - recipe.numberOfFittedIngredients.length ===1 ?
                            ' skladnika' : ' skladników'
                          }
                        </p>
                      }

                      <div className="icons">
                        <div className="recipeTime">{recipe.time} min.</div>
                        <div className="recipeDifficult">{recipe.difficult}</div>
                      </div>
                    </div>
                  </Col>
                </Link>
              )
            }
          ) :
          <h1><Link to={'/form'}><span className="span-button">Co masz w lodówce?</span></Link></h1>
      }
    </div>
  )
};


export default connect(mapStateToProps, mapDispatchToProps)(FilteredRecipes)