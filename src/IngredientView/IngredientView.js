import React from 'react'
import {ingredients} from '../data'
import {shops} from '../data'
import {Image, Col} from 'react-bootstrap'
import GoogleMap from 'google-map-react'
import './ingredientViewStyle.css'

import FaShoppingBasket from 'react-icons/lib/fa/shopping-basket'

import ShopMarker from '../ShopsLogoView/ShopMarker/ShopMarker'



export default (props) => {
  const ingredientsWithId = ingredients.find(
    ingredient => ingredient.id === parseInt(props.params.ingredientId, 10)
  )

  const myShops = shops.filter(
    shop => shop.ingredients.find(ingredient => ingredient.id === ingredientsWithId.id)
  )

  return (
    <div>
      <Col xs={12}>
        <div key={ingredientsWithId.id}>
          <Col lg={6} className="ingredientPictureContainer">
            <h1 className="ingredientWithIdName">{ingredientsWithId.name}</h1>
            <hr className="separator" />
            <div>
            <Image className="ingredientPicture" src={ingredientsWithId.img}/>
            </div>
              <div>
              <h3 className="ProductAvailability">Ten produkt jest dostępny w sklepach: </h3>
              <ul className="shopList">
                {
                  shops.reduce(
                    (prev, next) => prev.find(item => item.name === next.name) ? prev : prev.concat(next),
                    []
                  ).filter(
                    shop => shop.ingredients.find(ingredient => ingredient.id === ingredientsWithId.id)
                  ).map(
                    shop =>
                      <li key={shop.id} className="shopName">
                        {shop.name}
                      </li>
                  )
                }
              </ul>
            </div>
            <span title="Dodaj do listy zakupów"><FaShoppingBasket className="basket"/></span>
          </Col>
          <Col xs={6}>
            <div className="googleMap">
            <div style={{height: 550, width: 600}}>
              <GoogleMap
                bootstrapURLKeys={{key: "AIzaSyDHlXcvJJKgck_i5M0uDbdZylQ2ERTDJHY"}}
                defaultCenter={{
                  lat: 54.403003,
                  lng: 18.572261
                }}
                defaultZoom={10}>

                {myShops.map(
                  shop =>
                    <ShopMarker key={shop.id}
                                img={shop.logo}
                                name={shop.name}
                                lat={shop.location.lat}
                                lng={shop.location.lng}
                                text={shop.name}
                                shop={shop}/>
                )}


              </GoogleMap>
            </div>
            </div>
          </Col>

          {props.children}
        </div>
      </Col>
    </div>
  )
}
