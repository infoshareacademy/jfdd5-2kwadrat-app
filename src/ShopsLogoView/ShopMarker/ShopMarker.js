import React from 'react'
import {default as ShopView} from '../ShopView/ShopView'


export default (props) => (
    <div>
        <ShopView shop={props.shop}
                  height={50}/>
    </div>
)