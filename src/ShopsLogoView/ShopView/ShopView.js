import React from 'react'
import {ingredients} from '../../data'
import {connect} from 'react-redux'
import {Modal} from 'react-bootstrap'
import {Link} from 'react-router'
import {Image} from 'react-bootstrap'
import FaCartPlus from 'react-icons/lib/fa/cart-plus'



const mapStateToProps = state => ({
  shops: state.shopsData.shops
})

const ShopView = React.createClass({

  getInitialState() {
    return {
      showModal: false,
      shop: {
        ingredients: []
      },

    }
  },

  close() {
    this.setState({
      showModal: false,
    })
  },

  open(thisShop) {
    this.setState({
        showModal: true,
        shop: thisShop
      },
    )
  },


  render(){
    return (
      <div>
        <Link key={this.props.shop.name}
              onClick={
                () =>
                  this.open(this.props.shop)
              }
        >
          <Image src={this.props.shop.logo}
                 height={this.props.height}
                 width="auto"
                 rounded
                 className="shop-logo"
          />
        </Link>
        <Modal show={this.state.showModal}
                onHide={this.close}>

          <Modal.Header closeButton>

            <Modal.Title >
              <Image src={this.state.shop.logo}
                     height='50px'
                     width="auto"
                     rounded
              />

              <hr className="style-two"/>
              <h3>U nas znajdziesz następujące artykuły:</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <table className="shop-products-table">
              <thead>
              <tr>
                <th> </th>
                <th>Nazwa</th>
                <th>Cena</th>
                <th> </th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.shop.ingredients.map(
                  shopIngredient => ({
                      ingredient: ingredients.find(
                        ingredient =>
                        ingredient.id === shopIngredient.id
                      ),
                      price: shopIngredient.ingredientPrice
                    }
                  )
                ).map(
                  item =>
                    <tr>
                      <td>
                        <Image src={item.ingredient.img}
                               height="60px"
                               width="auto"
                               rounded
                        />
                      </td>
                      <td>
                        <span className="ingredient-name"> {item.ingredient.name.toUpperCase()}</span>
                      </td>
                      <td>
                       Tylko <span className="red-price">{item.price}</span> zł / 1kg
                      </td>
                      <td>
                        <span title="Dodaj do listy zakupów">
                        <FaCartPlus  size="30px" color="#2da834" className="cart"/>
                        </span>
                      </td>
                    </tr>
                )
              }
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Link onClick={this.close}>
              <span className="span-button button-close">Zamknij</span>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})

export default connect(mapStateToProps)(ShopView)