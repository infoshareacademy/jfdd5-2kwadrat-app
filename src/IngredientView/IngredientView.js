import React from 'react'
import {ingredients} from '../data'
import {shops} from '../data'
import {Image, Col} from 'react-bootstrap'
import GoogleMap from 'google-map-react'


export default (props) => {
  const ingredientsWithId = ingredients.find(
    ingredient => ingredient.id === parseInt(props.params.ingredientId, 10)
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
                  shops.filter(
                    shop => shop.ingredients.find(ingredient => ingredient.id === ingredientsWithId.id)
                  ).map(
                    shop =>
                      <li key={shop.id}>
                        {shop.name}
                      </li>
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
                {/*<IngredientMarker lat={52.2296756}*/}
                                {/*lng={52.2296756} />*/}
              </GoogleMap>
            </div>

          </Col>
          {props.children}
        </div>
      </Col>
    </div>
  )
}
