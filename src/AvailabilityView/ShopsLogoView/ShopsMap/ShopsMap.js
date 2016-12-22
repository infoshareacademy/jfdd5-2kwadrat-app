import React from 'react'
import GoogleMap from 'google-map-react'
import ShopMarker from '../ShopMarker/ShopMarker'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    shops: state.shopsData.shops
})

const ShopsMap = props => (

    <div style={{height: 300, width: 600}}>
        <GoogleMap
            bootstrapURLKeys={{key: "AIzaSyCTKvmsmExcSySC_66go30qvDRqt_3teBo"}}
            defaultCenter={{
                lat: 54.403003,
                lng: 18.572261
            }}
            defaultZoom={10}>

            {props.shops.map(
                shop =>
                    <ShopMarker lat={shop.location.lat}
                                lng={shop.location.lng}
                                text={shop.name}/>
            )}
        </GoogleMap>
    </div>


)

export default connect(mapStateToProps)(ShopsMap)