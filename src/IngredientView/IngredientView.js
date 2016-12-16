import React from 'react'
import {ingredients} from '../data'
import { shops } from '../data'
import {Image, Col} from 'react-bootstrap'


export default (props) => {
  const shopWithId = shops.find(
      shop => shop.id === parseInt(props.params.shopId, 10)
  )
  return (
      <div>
        <Col xs={6}>
          <Image src={
            shopWithId.img}
                 width="auto"
                 height="200px"
          /><br/>

          <h1>{shopWithId.name}</h1>
        </Col>
        <Col xs={6}>
          <ul>
            {
              shopWithId.ingriedients.map( //ZMIENIC!
                  shopIngre =>
                      ingredients.find(
                          ingre =>
                          ingre.id === shopIngre.ingriedientId
                      )
              ).map(
                  item =>
                      <li key={item.id}>{item.name}</li>
              )
            }

          </ul>
        </Col>
      </div>
  )
}

// <div key={ingredientWithId.id}>
//   <Col xs={12}>
//     <h1>{ingredientWithId.name}</h1>
//     <Image src={ingredientWithId.img}/>
//     <div>
//       <h3> SKLEPY: </h3>
//       <ul>
//         {
//           shops.ingriedients.map(     //nazwa skladnika do poprawki
//               ingredient =>
//                   <li key={ingredient.id}>
//                     {ingredient.id}
//                     <p key={shops.id}>{shops.find( item => item.id === shops.id ).name}</p>
//                   </li>
//           )
//         }
//       </ul>
//     </div>
//   </Col>
// </div>