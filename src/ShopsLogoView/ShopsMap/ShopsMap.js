import React from 'react'
import GoogleMap from 'google-map-react'
import {connect} from 'react-redux'
import ShopMarker from '../ShopMarker/ShopMarker'


const mapStateToProps = state => ({
  shops: state.shopsData.shops
});

const ShopsMap = props => (
  <div style={{height: 500, width: 600}}>
    <GoogleMap
      bootstrapURLKeys={{key: "AIzaSyCTKvmsmExcSySC_66go30qvDRqt_3teBo"}}
      defaultCenter={{
        lat: 54.413003,
        lng: 18.592261
      }}
      defaultZoom={13}>

      {props.shops.map(
        shop =>
          <ShopMarker key={shop.id}
            img={shop.logo}
            name={shop.name}
            lat={shop.location.lat}
            lng={shop.location.lng}
            text={shop.name}
            shop={shop}
          />
      )}
    </GoogleMap>
  </div>
);

export default connect(mapStateToProps)(ShopsMap)