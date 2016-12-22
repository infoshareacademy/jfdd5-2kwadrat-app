import React from 'react'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {Modal, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {default as ShopsMap} from './ShopsMap/ShopsMap'


import {ingredients} from '../../data'
import './ShopLogoView.css'

const mapStateToProps = state => ({
    shops: state.shopsData.shops
})

const ShopsLogoView = React.createClass({

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

    render() {
        return (
            <div>
                <div>
                    <h1>Shops: </h1>
                    {
                        this.props.shops.map(
                            shop => {
                                return (
                                    <Col key={shop.id} xs={12} sm={6} md={4} className='shop-container'>
                                        <Link key={shop.name}
                                              onClick={() => this.open(shop)
                                              }
                                        > <Image src={shop.logo}
                                                 height="100px"
                                                 width="auto" rounded
                                        />
                                        </Link>
                                        < Modal show={this.state.showModal} onHide={this.close}>
                                            <Modal.Header closeButton>
                                                <Modal.Title >{this.state.shop.name}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Image src={this.state.shop.logo}
                                                       height="100px"
                                                       width="auto" rounded
                                                />
                                                <ul key={shop.id}>
                                                    {
                                                        this.state.shop.ingredients.map(
                                                            shopIngredients =>
                                                                ingredients.find(
                                                                    ingredient =>
                                                                    ingredient.id === shopIngredients.id
                                                                )
                                                        ).map(
                                                            item =>
                                                                <li key={item.id}>{item.name}
                                                                    <Image src={item.img}
                                                                           height="40px"
                                                                           width="auto" rounded
                                                                    /></li>
                                                        )
                                                    }
                                                </ul>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button onClick={this.close}>Close</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Col>)
                            }
                        )

                    }

                </div>
                <br/>
                <Col xs={12}>
                    {<ShopsMap />}
                </Col>
            </div>
        )
    }
})

export default connect(mapStateToProps)(ShopsLogoView)
