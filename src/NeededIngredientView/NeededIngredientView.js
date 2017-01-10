import React from 'react'
import {Col} from 'react-bootstrap'

import './NeededIngredientView.css'

export default () => (
    <div className="instruction-view">
      <Col xs={12} md={6} mdOffset={3} className="neededIngredientContainer">
        <div className="cos">Lista zakupów</div>
        { /* <div>{neededIngredient.name} </div> */}
        {/* <div> and the other neededIngredient stuff <div/> */}
      </Col>
    </div>
)