import React from 'react'
import {ingredients} from '../data'
import {shops} from '../data'
import {Image, Col} from 'react-bootstrap'
import GoogleMap from 'google-map-react'

import ShopMarker from '../AvailabilityView/ShopsLogoView/ShopMarker/ShopMarker'


export default (props) => {
  const ingredientsWithId = ingredients.find(
    ingredient => ingredient.id === parseInt(props.params.ingredientId, 10)
  )

  const myShops = shops.filter(
    shop => shop.ingredients.find(ingredient => ingredient.id === ingredientsWithId.id)
  )

  return (
    <div>
      <Col xs={6}>
        <div key={ingredientsWithId.id}>
          <Col xs={12}>
            <h1>{ingredientsWithId.name}</h1>
            <Image src={ingredientsWithId.img}/>
            <div>
              <h3> SKLEPY: </h3>
              <ul>
                {
                  myShops.map(
                    shop =>(

                      <li key={shop.id}>
                      {shop.name}
                    </li>
                    )

                  )
                }
              </ul>
            </div>

            <div style={{height: 300, width: 600}}>
              <GoogleMap
                bootstrapURLKeys={{key: "AIzaSyDHlXcvJJKgck_i5M0uDbdZylQ2ERTDJHY" }}
                defaultCenter={{
                  lat: 54.2296756,
                  lng: 18.012228700000037
                }}
                defaultZoom={10}>

                {myShops.map(
                  shop =>
                    <ShopMarker lat={shop.location.lat}
                                lng={shop.location.lng}
                                  name ={shop.name}/>
                )}



              </GoogleMap>
            </div>

          </Col>
          {props.children}
        </div>
      </Col>
    </div>
  )
}
