import React from 'react'
import {Col} from 'react-bootstrap'

import {connect} from 'react-redux'
import {default as ShopsMap} from './ShopsMap/ShopsMap'
import {default as ShopView} from './ShopView/ShopView'

import './ShopLogoView.css'

const mapStateToProps = state => ({
    shops: state.shopsData.shops
})

const ShopsLogoView = (props) => {
    return (
        <div>
              <Col xs={6}>
                <h1>Shops: </h1>
                {
                    props.shops.reduce(
                        (prev, next) =>
                            prev.find(
                                item =>
                                item.name === next.name) ?
                                prev :
                                prev.concat(next),
                        []
                    ).map(
                        shop => {
                            return (
                                <Col key={shop.id}
                                     xs={12}
                                     className='shop-container'>
                                    <ShopView shop={shop}
                                              height='150px'
                                    />
                                </Col>
                            )
                        }
                    )
                }
              </Col>
          <Col xs={6}>
                {<ShopsMap />}
            </Col>
        </div>
    )
}

export default connect(mapStateToProps)(ShopsLogoView)
