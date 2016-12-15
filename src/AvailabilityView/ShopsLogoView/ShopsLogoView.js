import React from 'react'
import {Image, Col} from 'react-bootstrap'

import {shops} from '../../data'

export default () => (
  <div>
    <h1>ShopsView</h1>
    {
      shops.map(
        shop => {
          return (
            <Col xs={12} sm={6} md={4}>
              <Image src={shop.logo} height="200px" width="auto" rounded/>
              <p key={shop.id}>{shop.name} </p>
            </Col>
          )
        }
      )
    }
  </div>
)

