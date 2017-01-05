import React from 'react'
import './styles.css'
import {ingredients} from '../data'

import {Image, Col, Row, FormControl} from 'react-bootstrap'
import {Link} from 'react-router'
import {connect} from 'react-redux'

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row className="ingredientInputRow">
            <Col xs={12} sm={8} md={6}
                 xsOffset={0} smOffset={2} mdOffset={3}
            >
              <h2 className="titles">Wybierz posiadane produkty</h2>

              <FormControl
                className="ingredientInput"
                bsSize="sm"
                type="text"
                placeholder="w lodówce mam..."
                onChange={(event) => this.setState({search: event.target.value})}
              />
            </Col>
          </Row>

          <Row>
            {ingredients.filter(
              ingredient => this.state.search === '' ? false : ingredient.name.includes(this.state.search)
            ).slice(0, 4).map(
              ingredient => {
                return (
                  <Col key={ingredient.id} xs={6} sm={4} md={3} onClick={
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
                      <Image className="filteredIngredientImage" src={ingredient.img}/>
                      <div className="ingredientName">
                        {ingredient.name}
                      </div>
                    </div>
                  </Col>
                )
              }
            )}
          </Row>
        </form>

        <form className="formBottomHalf">
          <Row>
            <Col xs={12}>
              {this.props.selectedIngredients.length === 0 ? null :
                <hr className="middleDividingLine"></hr>}
            </Col>
            <Col xs={12} sm={8} md={6}
                 xsOffset={0} smOffset={2} mdOffset={3}
            >
              {this.props.selectedIngredients.length === 0 ? null :
                <h2 className="titles">Wybrane produkty</h2>}
            </Col>
          </Row>

          <Row>
            {
              this.props.selectedIngredients.map(
                ingredient =>
                  <Col key={ingredient.id} xs={6} sm={4} md={3} onClick={
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
                      <Image className="chosenIngredientImage" src={ingredient.img}/>
                      <div className="ingredientName">
                        {ingredient.name}
                      </div>
                    </div>
                  </Col>
              )
            }
          </Row>

          <Row xs={12}>
            {this.props.selectedIngredients.length === 0 ? null :
              <hr className="bottomDividingLine"></hr>}
          </Row>
        </form>

        <div className="searchButton">
          {this.props.selectedIngredients.length === 0 ? null :
            <h2 className="searchButtonText">
              <Link className="linkInsideButton" to={'/filtered-recipes'}>
                PRZEPISY<br/>DLA<br/>CIEBIE
              </Link>
            </h2>}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FridgeView)