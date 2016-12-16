import React from 'react'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {Modal, Button} from 'react-bootstrap'

import {shops} from '../../data'

export default  React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        console.log(this.state)
        this.setState({showModal: true});
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
                                          onClick={this.open}
                                    > <Image src={shop.logo}
                                             height="100px"
                                             width="auto" rounded
                                    />
                                        {shop.name}

                                    </Link>
                                    < Modal show={this.state.showModal} onHide={this.close}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{shop.id}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
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
        );
    }
});


// (props) => (
//     <div>
//         <h1>ShopsView</h1>
//         {
//             shops.map(
//                 shop => {
//                     return (
//
//                         <Col key={shop.id} xs={12} sm={6} md={4}>
//                             <Link to={'/shops/' + shop.id}>
//                                 <Image src={shop.logo}
//                                        height="100px"
//                                        width="auto" rounded
//                                 />
//                             </Link>
//                             <br/>
//                             <br/>
//                         </Col>
//
//                     )
//                 }
//             )
//         }
//     </div>
// )
//
