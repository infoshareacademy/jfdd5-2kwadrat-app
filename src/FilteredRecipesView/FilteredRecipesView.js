import React from 'react'
import {connect} from 'react-redux'
import {Image, Col, ButtonGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router'
import './FilteredRecipesView.css'
import FaArrowLeft from 'react-icons/lib/fa/arrow-left'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {recipes} from '../data'
import {selectRecipes} from './select'
import {default as FridgeView} from '../FridgeView/FridgeView.js'


const mapStateToProps = state => ({
  selectedIngredients: state.selectedIngredients.selectedIngredients,
  filterNames: state.filteredRecipesViewReducer.filterNames
});

const mapDispatchToProps = dispatch => ({
  setFilter: (filterName) => dispatch({
    type: 'SET_FILTER',
    filterName: filterName
  }),
  removeFilter: (filterName) => dispatch({
    type: 'REMOVE_FILTER',
    filterName: filterName
  }),
  resetFilters: () => dispatch({type: 'RESET_FILTERS'})
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
      <div>
        <FridgeView/>
      </div>
      <div>
        {
          arrayOfSelectedIngredientsID.length !== 0 ?
            <div>
              <ButtonGroup>
                <DropdownButton
                  title={
                    props.filterNames.includes("timeShort") ?
                      'Czasochłonność: krótkie' :
                      (props.filterNames.includes("timeMedium") ?
                        'Czasochłonność: średnie' :
                        (props.filterNames.includes("timeLong") ?
                          'Czasochłonność: długie' :
                          'Czasochłonność'))
                  }
                  bsStyle={
                    props.filterNames.includes("timeShort") ?
                      'success' :
                      (props.filterNames.includes("timeMedium") ?
                        'success' :
                        (props.filterNames.includes("timeLong") ?
                          'success' :
                          'default'))
                  }
                  id="bg-nested-dropdown"
                >
                  <MenuItem eventKey="1" onClick={() => {
                    props.removeFilter('timeShort')
                    props.removeFilter('timeMedium')
                    props.removeFilter('timeLong')
                    return (
                      props.filterNames.indexOf('timeShort')
                      === -1 ? props.setFilter('timeShort') : props.removeFilter('timeShort')
                    )
                  }}
                  >
                    krótkie
                  </MenuItem>

                  <MenuItem eventKey="2" onClick={() => {
                    props.removeFilter('timeShort')
                    props.removeFilter('timeMedium')
                    props.removeFilter('timeLong')
                    return (
                      props.filterNames.indexOf('timeMedium')
                      === -1 ? props.setFilter('timeMedium') : props.removeFilter('timeMedium')
                    )
                  }}
                  >
                    średnie
                  </MenuItem>

                  <MenuItem eventKey="3" onClick={() => {
                    props.removeFilter('timeShort')
                    props.removeFilter('timeMedium')
                    props.removeFilter('timeLong')
                    return (
                      props.filterNames.indexOf('timeLong')
                      === -1 ? props.setFilter('timeLong') : props.removeFilter('timeLong')
                    )
                  }}
                  >
                    długie
                  </MenuItem>
                </DropdownButton>

                <DropdownButton
                  title={
                    props.filterNames.includes("difficultEase") ?
                      'Trudność: łatwe' :
                      (props.filterNames.includes("difficultMedium") ?
                        'Trudność: średnie' :
                        (props.filterNames.includes("difficultHard") ?
                          'Trudność: trudne' :
                          'Trudność'))
                  }
                  bsStyle={
                    props.filterNames.includes("difficultEase") ?
                      'success' :
                      (props.filterNames.includes("difficultMedium") ?
                        'success' :
                        (props.filterNames.includes("difficultHard") ?
                          'success' :
                          'default'))
                  }
                  id="bg-nested-dropdown"
                >

                  <MenuItem eventKey="1" onClick={() => {
                    props.removeFilter('difficultEase')
                    props.removeFilter('difficultMedium')
                    props.removeFilter('difficultHard')
                    return (
                      props.filterNames.indexOf('difficultEase')
                      === -1 ? props.setFilter('difficultEase') : props.removeFilter('difficultEase')
                    )
                  }}
                  >
                    łatwe
                  </MenuItem>

                  <MenuItem eventKey="2" onClick={() => {
                    props.removeFilter('difficultEase')
                    props.removeFilter('difficultMedium')
                    props.removeFilter('difficultHard')
                    return (
                      props.filterNames.indexOf('difficultMedium')
                      === -1 ? props.setFilter('difficultMedium') : props.removeFilter('difficultMedium')
                    )
                  }}
                  >
                    średnie
                  </MenuItem>

                  <MenuItem eventKey="3" onClick={() => {
                    props.removeFilter('difficultEase')
                    props.removeFilter('difficultMedium')
                    props.removeFilter('difficultHard')
                    return (
                      props.filterNames.indexOf('difficultHard')
                      === -1 ? props.setFilter('difficultHard') : props.removeFilter('difficultHard')
                    )
                  }}
                  >
                    trudne
                  </MenuItem>
                </DropdownButton>

                <Button onClick={() => props.resetFilters()}>
                  Usuń filtry
                </Button>
              </ButtonGroup>
              <div title="wstecz" className="button-back">
                <Link to={'/form'}><span className="btn-back"><FaArrowLeft size="40px"/></span></Link>
              </div>
            </div> : ''
        }
        {
          arrayOfSelectedIngredientsID.length !== 0 ?
            selectRecipes(newRecipesArray, props.filterNames).map(
              recipe => {
                console.log(recipe)
                return (
                  <Link key={recipe.id} to={'/recipes/' + recipe.id}>
                    <Col key={recipe.id} xs={12} sm={6} md={4}>
                      <ReactCSSTransitionGroup
                        transitionName="fadeFilteredRecipes"
                        transitionAppearTimeout={300}
                        transitionAppear={true}>

                        <div className="recipeCard recipeCardHeight">
                          <Image className="photo image" src={recipe.image}/>
                          <h2>{recipe.name}</h2>
                          {recipe.numberOfFittedIngredients.length === recipe.ingredients.length ?
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
                              {recipe.ingredients.length - recipe.numberOfFittedIngredients.length === 1 ?
                                ' skladnika' : ' skladników'
                              }
                            </p>
                          }
                          <div className="icons">
                            <div className="recipeTime">{recipe.time} min.</div>
                            <div className="recipeDifficult">{recipe.difficult}</div>
                          </div>
                        </div>
                      </ReactCSSTransitionGroup>

                    </Col>
                  </Link>
                )
              }
            ) : ''
        }
      </div>
    </div>
  )
};


export default connect(mapStateToProps, mapDispatchToProps)(FilteredRecipes)