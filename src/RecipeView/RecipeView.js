import React from 'react'
import {Image, Col, Button} from 'react-bootstrap'
import {recipes} from '../data'
import {ingredients} from '../data'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import FaCartPlus from 'react-icons/lib/fa/cart-plus'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square'
import FaCalendar from 'react-icons/lib/fa/calendar'
import GoChecklist from 'react-icons/lib/go/checklist'
import FaCheck from 'react-icons/lib/fa/check'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './RecipeViewStyle.css'
import '../animations.css'
import {addToCalendarFromRecipeView} from '../CalendarView/CalendarReducer/actionCreator'

import {addRecipeToFav, addToShoppingList,fetchFavouriteRecipes,fetchShoppingList}from '../FavouriteReducer/actionCreatos'

const mapStateToProps = state => ({
  selectedIngredients: state.selectedIngredients.selectedIngredients,
  session: state.currentUserData.session,
  favRecipes: state.favourite.favouriteRecipes,
  shoppingList: state.favourite.shoppingList
})

const mapDispatchToProps = dispatch => ({
  addToCalendar: (recipe) => dispatch(addToCalendarFromRecipeView(recipe)),
  addToShoppingList: (userId,accessToken,id) => dispatch(addToShoppingList(userId,accessToken,id)),
  addRecipe: (userId,accessToken,id) => dispatch(addRecipeToFav(userId,accessToken,id)),
  fetchFavRecipes: (userId, accessToken) => dispatch(fetchFavouriteRecipes(userId, accessToken)),
  fetchShoppingList: (userId, accessToken) => dispatch(fetchShoppingList(userId, accessToken))
})


class RecipeView extends React.Component{

  recipeWithId = recipes.find(
    recipe => recipe.id === parseInt(this.props.params.recipeId, 10)
  )
  arrayOfSelectedIngredientsID =
    this.props.selectedIngredients.map(
      selected =>
        selected.id
    )


  componentWillMount() {
   if( this.props.session !== null) {
     this.props.fetchFavRecipes(this.props.session.userId, this.props.session.id)
     this.props.fetchShoppingList(this.props.session.userId, this.props.session.id)
   }

  }
  render(){
    return (
      <ReactCSSTransitionGroup
        transitionName="fadeRecipe"
        transitionEnterTimeout={0}
        transitionAppearTimeout={500}
        transitionLeaveTimeout={0}
        transitionAppear={true}>
      <div key={this.recipeWithId.id}>
        <h1 className="recipeName">{this.recipeWithId.name}</h1>
        <Col xs={12} className="recipeViewWrapper">
          <Col lg={6}>
            <div className="grow pic">
              <Image className="photo recipeImage" src={this.recipeWithId.image}/>
            </div>
            {
              this.props.session !== null ?
              this.props.favRecipes.indexOf(this.recipeWithId.id) === -1 ?
              <span title="Dodaj do ulubionych" className="favorite"
                      onClick={() => {
                        const favorite = document.getElementsByClassName('favorite')
                        favorite[0].style.display = 'none'
                        this.props.addRecipe(this.props.session.userId, this.props.session.id, this.recipeWithId.id)
                      }}
              >&#9055;</span> : null
               :
                null
            }
          </Col>
          <Col lg={6}>
            <hr className="cutIt"/>
            <div className="manualView">
              <span className="ingredient">Składniki:</span>
              <ul className="ingredientsList">
                {
                  this.recipeWithId.ingredients.map(
                    ingredient =>
                      <li key={ingredient.id}>
                      <span>
                        {ingredients.find(item => item.id === ingredient.id).name}
                      </span>
                        {" "}<span className="amount">{ingredient.ingredientAmount}</span> {ingredient.unitMeasure}
                        <span key={ingredient.id}>
                        { this.arrayOfSelectedIngredientsID.indexOf(ingredient.id) !== -1 && this.props.session !== null ?
                          <span title="Masz ten składnik"><FaCheck className="checkedIngredient" /></span> :
                          <span className="iconOptions">
                              {this.props.session !== null ?
                              this.props.shoppingList.map(
                                list => list.itemId
                              ).indexOf(ingredient.id) === -1 ?
                                <span title="Dodaj do listy zakupów" >
                                <GoChecklist className=" addToListRecipeView"
                                             id={ingredient.id}
                                             onClick={
                                               ()=>{
                                                 document.getElementById(ingredient.id).style.display = 'none'
                                                 this.props.addToShoppingList(this.props.session.userId,this.props.session.id,ingredient.id)}
                                             }/>
                               </span>:null : null
                              }
                            <Link className="findIngredient" to={'/ingredient/' + ingredient.id}>
                               <span title="Znajdź sklep">
                                  <FaCartPlus size="40px" color="#2da834"
                                              className="cart"/>

                               </span>
                                </Link>
                            </span>
                        }
                        </span>
                        </li>
                  )
                }
              </ul>
              {
                this.props.session !== null ?
                  <Link to={"/calendar"}>
                    <div title="Dodaj przepis do swojego kalendarza" className="calendarButton">
                      <FaCalendar size="40px" color="#2da834"
                                  className="cart"/>
                      <Button className="addToCalendar"
                              bsStyle="success"
                              onClick={() =>this.props.addToCalendar(this.recipeWithId)}
                      >Dodaj do kalendarza
                      </Button>
                    </div>
                  </Link>:
                  null
              }
            </div>
            <div title="udostępnij" className="socialIcons">
              <a href="https://plus.google.com/" target="_blank">
                <FaGooglePlusSquare size="40px" className="socialIcon socialGplus"/>
              </a>

              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookSquare size="40px" className="socialIcon socialFacebook"/>
              </a>

              <a href="https://twitter.com/" target="_blank">
                <FaTwitterSquare size="40px" className="socialIcon socialTwitter"/>
              </a>
            </div>
          </Col>
          <Col xs={12}>
            <hr className="aboveDescription"/>
            <p className="description">{this.recipeWithId.description}</p>
          </Col>
        </Col>
        <Col xs={12}>
          <p>Dodane komentarze innych uzytkownikow</p>
        </Col>
        {
          this.props.session !== null ?

              <Col xs={12} md={6} mdOffset={3}>
                <div className="commentsContainer">
                  <div className="userInformation">
                  </div>
                  <form>
                    <label>
                      <p className="commentTitle">tytuł:</p> <input name="title" className="titleField"/>
                    </label>

                    <br/>

                    <label>
                      <p className="commentBody">treść:</p> <textarea name="body" className="bodyField"></textarea>
                    </label>

                    <br/>

                    <input type="submit" value="Dodaj komentarz" className="addBtn"/>
                  </form>
                </div>
              </Col>
              :
              <p>Zaloguj się aby dodać komentarz</p>
        }
        {this.props.children}
      </div>
      </ReactCSSTransitionGroup>
  )
}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView)