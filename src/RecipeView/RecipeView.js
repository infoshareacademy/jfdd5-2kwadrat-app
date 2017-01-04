import React from 'react'
import './RecipeViewStyle.css'
import {Image, Col} from 'react-bootstrap'
import {recipes} from '../data'
import {ingredients} from '../data'
import {Link} from 'react-router'
import {connect} from 'react-redux'
const mapStateToProps = state => ({
  selectedIngredients: state.selectedIngredients.selectedIngredients
});


export default connect(mapStateToProps)((props) => {
  const recipeWithId = recipes.find(
    recipe => recipe.id === parseInt(props.params.recipeId, 10)
  );
  const arrayOfSelectedIngredientsID =
    props.selectedIngredients.map(
      selected =>
        selected.id
    );

  return (
    <div key={recipeWithId.id}>
      <h1 className="recipeName">{recipeWithId.name}</h1>
      <Col xs={12} className="recipeViewWrapper">
        <Col lg={6}>
          <div className="grow pic">
            <Image className="photo recipeImage" src={recipeWithId.image}/>
          </div>
          <span title="Dodaj do ulubionych" className="favorite">&#9055;</span>
        </Col>
        <Col lg={6}>
          <div>
            <span> SKŁADNIKI: </span><span>Znajd</span>
            <ul className="ingredientsList">
              {
                recipeWithId.ingredients.map(
                  ingredient =>
                    <li key={ingredient.id}>
                    <span>
                      {ingredients.find(item => item.id === ingredient.id).name}
                    </span>
                      {" "}{ingredient.ingredientAmount} {ingredient.unitMeasure}
                      <span key={ingredient.id}>
                      {
                        <Link className="cos" to={'/ingredient/' + ingredient.id}>
                          { arrayOfSelectedIngredientsID.indexOf(ingredient.id) !== -1 ?
                            <span>Zlokalizuj wiecej {ingredient.name}</span> :
                            <span>===></span>
                          }
                        </Link>
                      }
                    </span>
                    </li>
                )
              }
            </ul>
          </div>
        </Col>
        <Col xs={12}>
          <p>{recipeWithId.description}</p>
        </Col>
      </Col>
      {props.children}
    </div>
  )
})