import React from 'react'
import {Image, Col} from 'react-bootstrap'
import {Link} from 'react-router'

import {shops} from '../../data'

export default (props) => (
  <div>
    <h1>ShopsView</h1>
    {
      shops.map(
        shop => {
          return (

            <Col xs={12} sm={6} md={4}>
              <Link to={'/shops/' + shop.id}>
                <Image src={shop.logo}
                       height="100px"
                       width="auto" rounded
                />
              </Link>
              <br/>
              <br/>
            </Col>

          )
        }
      )
    }
  </div>
)

