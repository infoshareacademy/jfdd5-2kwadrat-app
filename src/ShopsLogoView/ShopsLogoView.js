import React from 'react'
import {Col} from 'react-bootstrap'

import {connect} from 'react-redux'
import {default as ShopsMap} from './ShopsMap/ShopsMap'
import {default as ShopView} from './ShopView/ShopView'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations.css'

import './ShopLogoView.css'

const mapStateToProps = state => ({
  shops: state.shopsData.shops
})

const ShopsLogoView = (props) => {
  return (
      <ReactCSSTransitionGroup
          transitionName="fadeShopLogo"
          transitionEnterTimeout={500}
          transitionAppearTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}>
    <div className="shop-logo-view">
      <Col xs={12} md={6}>

        <h1 className="cooworkingShops">Partnerskie sklepy:</h1>
        <hr className="separator"/>
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
                     xs={12} md={6}
                     className='shop-container'>
                  <ShopView shop={shop}
                            height={70 }
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
      </ReactCSSTransitionGroup>
  )
}

export default connect(mapStateToProps)(ShopsLogoView)
