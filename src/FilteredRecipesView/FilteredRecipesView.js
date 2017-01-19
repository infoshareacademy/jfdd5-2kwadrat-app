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
import '../animations.css'

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
        <ReactCSSTransitionGroup
            transitionName="slideFilteredRecipes"
            transitionEnterTimeout={0}
            transitionAppearTimeout={900}
            transitionLeaveTimeout={0}
            transitionAppear={true}>
          <Col xs={12} sm={4} md={3}>
            <FridgeView/>
          </Col>
        </ReactCSSTransitionGroup>

        <Col xs={12} sm={8} md={9}>
          <div>
            <ReactCSSTransitionGroup
                transitionName="slideInUpFiltered"
                transitionEnterTimeout={0}
                transitionAppearTimeout={900}
                transitionLeaveTimeout={0}
                transitionAppear={true}>
              <h2 className="filtersTitle">Przepisy dla Ciebie</h2>
            </ReactCSSTransitionGroup>
            {
              arrayOfSelectedIngredientsID.length !== 0 ?
                  <div className="dropdownFilteringButtons">
                    <ButtonGroup>
                      <DropdownButton
                          className="dropdownButton"
                          title={
                            props.filterNames.includes("timeShort") ?
                                'czasochłonność: 0-30 min.' :
                                (props.filterNames.includes("timeMedium") ?
                                    'czasochłonność: 31-50 min.' :
                                    (props.filterNames.includes("timeLong") ?
                                        'czasochłonność: 51-70 min.' :
                                        'czasochłonność'))
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
                          0-30 min.
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
                          31-50 min.
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
                          51-70 min.
                        </MenuItem>
                      </DropdownButton>

                      <DropdownButton
                          className="dropdownButton"
                          title={
                            props.filterNames.includes("difficultEase") ?
                                'trudność: łatwe' :
                                (props.filterNames.includes("difficultMedium") ?
                                    'trudność: średnie' :
                                    (props.filterNames.includes("difficultHard") ?
                                        'trudność: trudne' :
                                        'trudność'))
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

                      <Button
                          className="dropdownButton"
                          onClick={() => props.resetFilters()}>
                        usuń filtry
                      </Button>
                    </ButtonGroup>
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
                                    transitionEnterTimeout={0}
                                    transitionAppearTimeout={900}
                                    transitionLeaveTimeout={0}
                                    transitionAppear={true}>
                                  <div className="recipeCardHeight filteredRecipeCard">
                                    <Image className="photo image filteredImage" src={recipe.image}/>
                                    <h2 className="recipeTitle">{recipe.name}</h2>
                                    {recipe.numberOfFittedIngredients.length === recipe.ingredients.length ?
                                        <p className="missing-ingredients-info">
                                          <ReactCSSTransitionGroup
                                              transitionName="bounceFilteredRecipes"
                                              transitionEnterTimeout={0}
                                              transitionAppearTimeout={900}
                                              transitionLeaveTimeout={0}
                                              transitionAppear={true}>
                                            <div className="allIngredients">
                                              Masz wszystkie składniki! Do dzieła...
                                            </div>
                                          </ReactCSSTransitionGroup>

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
                                          Brakuje Ci
                                          tylko {recipe.ingredients.length - recipe.numberOfFittedIngredients.length }
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
                  ) :
                  <ReactCSSTransitionGroup
                      transitionName="fadeFilteredRecipes"
                      transitionEnterTimeout={0}
                      transitionAppearTimeout={900}
                      transitionLeaveTimeout={0}
                      transitionAppear={true}>
                    <p className="instruction">
                      <p className="arrow">&#8598;</p>
                      Wpisz nazwę składnika, który masz w lodówce.
                      <br/>
                      Kliknij na składnik, gdy się wyświetli.
                      <br/>
                      Kliknj na składnik ponownie, aby go usunąć.
                    </p>
                  </ReactCSSTransitionGroup>
            }
          </div>
        </Col>
      </div>
  )
};


export default connect(mapStateToProps, mapDispatchToProps)(FilteredRecipes)