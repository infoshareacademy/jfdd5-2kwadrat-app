import React from 'react'
import {ingredients} from '../data'
import { shops } from '../data'
import {Image, Col} from 'react-bootstrap'


export default (props) => {
  const shopsWithId = shops.find(
      shop => shop.id === parseInt(props.params.shopId, 10)
  )
  return (
      <div>
        <Col xs={6}>

          <div key={shopsWithId.id}>
            <Col xs={12}>
              <h1>{shopsWithId.name}</h1>
              <Image src={shopsWithId.img}/>
              <div>
                <h3> SKLEPY: </h3>
                <ul>
                  {
                    shopsWithId.ingriedients.map(     //nazwa skladnika do poprawki w shopach
                        ingriedients =>
                            <li key={ingriedients.id}>
                              {ingriedients.ingriedientId}
                              <p key={shops.id}>{shops.find( ingriedients => ingriedients.ingriedientId === ingriedients.ingriedientId ).ingriedientPrice}</p>
                            </li>
                    )
                  }
                </ul>
              </div>
            </Col>
            {props.children}
          </div>

        </Col>

      </div>
  )
}

