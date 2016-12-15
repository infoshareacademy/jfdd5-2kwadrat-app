import React from 'react'
import {Image, Col} from 'react-bootstrap'

import {shops} from '../../data'

export default (props) => {
    const shopWithId = shops.find(
        shop => shop.id === parseInt(props.params.shopId, 10)
    )
    return (
        <div>
            <Col xs={12}>
            <Image src={
                shopWithId.logo}
                   width="auto"
                   height="200px"
            /><br/>

           <h1>{shopWithId.name}</h1>
            </Col>
        </div>
    )
}