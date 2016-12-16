import React from 'react'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {Modal, Button} from 'react-bootstrap'

import {shops, ingredients} from '../../data'

export default  React.createClass({

    getInitialState() {
        return {
            showModal: false,
            shop: {
                ingriedients: []
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
                <p>Shop</p>
                {
                    shops.map(
                        shop => {
                            return (
                                <Col key={shop.name} xs={12} sm={6} md={4}>
                                    <Link key={shop.name}
                                          onClick={() => this.open(shop)
                                          }
                                    > <Image src={shop.logo}
                                             height="100px"
                                             width="auto" rounded
                                    />
                                        {shop.name}

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
                                            <ul>
                                                {
                                                    this.state.shop.ingriedients.map(
                                                        shopIngre =>
                                                            ingredients.find(
                                                                ingre =>
                                                                ingre.id === shopIngre.ingriedientId
                                                            )
                                                    ).map(
                                                        item =>
                                                            <li key={item.id}>{item.name}</li>
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
        )
    }
})
