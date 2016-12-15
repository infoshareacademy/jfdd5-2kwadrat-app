import React from 'react'
import {Image, Col} from 'react-bootstrap'

import {shops,ingredients} from '../../data'

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
                {/*<ul>*/}
                    {/*{*/}
                        {/*shopWithId.ingredients.map(*/}
                            {/*ingredient => ingredients.find(*/}
                                {/*item => item.id === ingredient.ingredientId*/}
                            {/*)*/}
                        {/*).map(*/}
                           {/*item2 =>*/}
                           {/*<li key={item2.id}>{item2.name}</li>*/}
                       {/*)*/}
                    {/*}*/}
                {/*</ul>*/}
            </Col>
        </div>
    )
}