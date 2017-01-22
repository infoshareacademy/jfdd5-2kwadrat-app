import React from 'react'
import {ingredients} from '../data'
import {shops} from '../data'
import {Image, Col} from 'react-bootstrap'
import GoogleMap from 'google-map-react'
import GoChecklist from 'react-icons/lib/go/checklist'
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './ingredientViewStyle.css'
import '../animations.css'
import ShopMarker from '../ShopsLogoView/ShopMarker/ShopMarker'


const IngredientView = (props) => {
  const ingredientsWithId = ingredients.find(
    ingredient => ingredient.id === parseInt(props.params.ingredientId, 10)
  );

  const myShops = shops.filter(
    shop => shop.ingredients.find(ingredient => ingredient.id === ingredientsWithId.id)
  );

  return (
    <div>
      <Col xs={12}>
        <ReactCSSTransitionGroup
            transitionName="fadeIngredient"
            transitionEnterTimeout={0}
            transitionAppearTimeout={400}
            transitionLeaveTimeout={0}
            transitionAppear={true}>
        <div key={ingredientsWithId.id} className="">
          <Col lg={6} className="ingredientPictureContainer">

            <h1 className="ingredientWithIdName">{ingredientsWithId.name}</h1>

            <hr className="separator"/>

            <div>
              <Image className="ingredientPicture" src={ingredientsWithId.img}/>
            </div>

            <div className="listContainer">
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
                <li>
                  <span title="Dodaj do listy zakupów" >
                    {
                      props.user !== null ?
                        <GoChecklist className="addToList" onClick={() => props.addIngredient(ingredientsWithId.id)}/>:
                        null
                    }
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={6} className="mapContainer">
            <div className="googleMap">
              <div style={{height: 500, width: 600}}>
                <GoogleMap
                  bootstrapURLKeys={{key: "AIzaSyDHlXcvJJKgck_i5M0uDbdZylQ2ERTDJHY"}}
                  defaultCenter={{
                    lat: 54.403003,
                    lng: 18.572261
                  }}
                  defaultZoom={12}>

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
        </ReactCSSTransitionGroup>
      </Col>
    </div>
  )
};
export default IngredientView
