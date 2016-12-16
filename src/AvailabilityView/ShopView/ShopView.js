import React from 'react'
import {Image, Col} from 'react-bootstrap'

import {shops, ingredients} from '../../data'

export default (props) => {
    const shopWithId = shops.find(
        shop => shop.id === parseInt(props.params.shopId, 10)
    )
    console.log(shopWithId)
    return (
        <div>
            <Col xs={6}>
                <Image src={
                    shopWithId.logo}
                       width="auto"
                       height="200px"
                /><br/>

                <h1>{shopWithId.name}</h1>
            </Col>
            <Col xs={6}>
                {console.log(shopWithId)}
                <ul>
                    {
                        shopWithId.ingriedients.map(
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
            </Col>
        </div>
    )
}