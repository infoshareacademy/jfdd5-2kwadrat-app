import React from 'react'
import './styles.css'
import {ingredients} from '../data'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import {Image, Col, Row, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import FaCutlery from 'react-icons/lib/fa/cutlery'
import '../animations.css'


const mapStateToProps = state => ({
  selectedIngredients: state.selectedIngredients.selectedIngredients
})

const mapDispatchToProps = dispatch => ({
  addIngredient: (ingredient) => dispatch({
    type: 'ADD_SELECTED_INGREDIENT',
    ingredient: ingredient
  }),

  removeIngredient: (ingredient) => dispatch({
    type: 'REMOVE_SELECTED_INGREDIENT',
    ingredientId: ingredient
  })
})


class FridgeView extends React.Component {
  constructor() {
    super()

    this.handleSubmit = (event) => {
      event.preventDefault()
    }

    this.state = {
      ingredients: []
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="fadeFridgeView"
        transitionAppearTimeout={400}
        transitionAppear={true}>
        <div className="divKeepsAll">
          <form onSubmit={this.handleSubmit}>
            <Col className="ingredientInputRow" xs={12}>
              <h2 className="titles titleTop">Wybierz co masz w lodówce</h2>

              <FormControl
                className="ingredientInput"
                bsSize="sm"
                type="text"
                placeholder="w lodówce mam..."
                onChange={(event) => this.setState({search: event.target.value})}
              />

              {ingredients.filter(
                ingredient => this.state.search === '' ? false : ingredient.name.includes(this.state.search)
              ).slice(0, 4).map(
                ingredient => {
                  return (
                    <div onClick={
                      () => {
                        if (this.props.selectedIngredients.find(item => item.id === ingredient.id) === undefined) {
                          this.setState(
                            {
                              ingredients: this.state.ingredients.concat(
                                {
                                  name: ingredient.name,
                                  id: ingredient.id,
                                  img: ingredient.img
                                })
                            },
                            () => this.props.addIngredient(ingredient)
                          )
                        } else {
                          this.setState(
                            {
                              ingredients: this.state.ingredients.filter(
                                item => item.id !== ingredient.id
                              )
                            },
                            () => this.props.removeIngredient(ingredient.id)
                          )
                        }
                      }
                    }>
                      <div className="ingredientFieldContent filtered">
                        <Col xs={4}>
                          <Image className="filteredIngredientImage" src={ingredient.img}/>
                        </Col>

                        <Col xs={8}>
                          <div className="ingredientName">{ingredient.name}</div>
                        </Col>
                      </div>
                    </div>
                  )
                }
              )}
            </Col>
          </form>

          <form className="formBottomHalf">
            <Col xs={12}>
              {this.props.selectedIngredients.length === 0 ? null :
                <hr className="middleDividingLine"></hr>}
              {/*</Col>*/}
              {/*<Col xs={12}>*/}
              {this.props.selectedIngredients.length === 0 ? null :
                <h2 className="titles">Wybrane produkty:</h2>}
              {/*</Col>*/}

              {/*<Row>*/}
              {
                this.props.selectedIngredients.map(
                  ingredient =>
                    <div key={ingredient.id} onClick={
                      () => {
                        if (this.props.removeIngredient(ingredient.id)) {
                          this.setState(
                            {
                              ingredients: this.state.ingredients.filter(
                                item => item.id !== ingredient.id
                              )
                            },
                            () => this.props.removeIngredient(ingredient.id)
                          )
                        }
                      }
                    }>
                      <div className="ingredientFieldContent chosen">
                        <Col xs={4}>
                          <Image className="chosenIngredientImage" src={ingredient.img}/>
                        </Col>
                        <Col xs={8}>
                          <div className="ingredientName">{ingredient.name}</div>
                        </Col>
                      </div>
                    </div>
                )
              }
              {/*</Row>*/}
            </Col>

            {/*<Row>*/}
            <Col xs={12}>
              {this.props.selectedIngredients.length === 0 ? null :
                <hr className="bottomDividingLine"></hr>}
            </Col>
            {/*</Row>*/}
          </form>

          <div className="searchButton">
            {this.props.selectedIngredients.length === 0 ? null :


              //na onClick wysyłam informację do stora że lista jest gotowa;
              // w reducerze wpisuję nowy stan;
              // w FilteredRecipesView zamieniam ternary operator na to czy lista jest w sorze czy nie
              <div className="searchButtonText">
                <Link to={'/filtered-recipes'}>
                  <Button bsStyle="warning"
                          bsSize="large">
                    <FaCutlery /> PRZEPISY DLA CIEBIE
                  </Button>
                </Link>
              </div>}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FridgeView)