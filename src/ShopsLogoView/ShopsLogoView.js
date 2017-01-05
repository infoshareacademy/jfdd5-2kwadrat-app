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
        <div className="shop-logo-view">
              <Col xs={6}>
                <h1 className="span-blue">Partnerskie sklepy:</h1>
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
                                     xs={6}
                                     className='shop-container'>
                                    <ShopView shop={shop}

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
