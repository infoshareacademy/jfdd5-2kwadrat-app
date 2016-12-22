import React from 'react'
import {ingredients} from '../../data'
import {connect} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {Image} from 'react-bootstrap'

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
                    />
                </Link>
                < Modal show={this.state.showModal}
                        onHide={this.close}>

                    <Modal.Header closeButton>

                        <Modal.Title >
                            {this.state.shop.name}
                        </Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <Image src={this.state.shop.logo}
                               height='50px'
                               width="auto"
                               rounded
                        />
                        <ul key={this.props.shop.id}>
                            {
                                this.state.shop.ingredients.map(
                                    shopIngredients =>
                                        ingredients.find(
                                            ingredient =>
                                            ingredient.id === shopIngredients.id
                                        )
                                ).map(
                                    item =>
                                        <li key={item.id}>
                                            {item.name}
                                            <Image src={item.img}
                                                   height="40px"
                                                   width="auto"
                                                   rounded
                                            /></li>
                                )
                            }
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
})

export default connect(mapStateToProps)(ShopView)