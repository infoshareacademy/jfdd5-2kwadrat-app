import React from 'react'
import './RecipeViewStyle.css'
import {Image, Col} from 'react-bootstrap'
import {recipes} from '../data'
import {ingredients} from '../data'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import FaCartPlus from 'react-icons/lib/fa/cart-plus'
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
            <hr className="cutIt"/>
            <div className="manualView">
              <span className="ingredient">Składniki:</span>
                <ul className="ingredientsList">
                  {
                    recipeWithId.ingredients.map(
                      ingredient =>
                        <li key={ingredient.id}>
                        <span>
                          {ingredients.find(item => item.id === ingredient.id).name}
                        </span>
                          {" "}<span className="amount">{ingredient.ingredientAmount}</span> {ingredient.unitMeasure}
                          <span key={ingredient.id}>
                          {
                            <Link className="findIngredient" to={'/ingredient/' + ingredient.id}>
                              { arrayOfSelectedIngredientsID.indexOf(ingredient.id) !== -1 ?
                                <span>Zlokalizuj wiecej {ingredient.name}</span> :
                                <span><FaCartPlus  size="40px" color="#2da834" className="cart"/> </span>
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
          <hr className="aboveDescription"/>
          <p className="description">{recipeWithId.description}</p>
        </Col>
      </Col>
      {props.children}
    </div>
  )
})