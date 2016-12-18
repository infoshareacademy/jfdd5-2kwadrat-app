import React from 'react'
import {ingredients} from '../data'
import { shops } from '../data'
import {Image, Col} from 'react-bootstrap'


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
                        shop => shop.ingriedients.indexOf(ingredientsWithId.id) !== -1
                    ).map(
                        shop =>
                            <li key={shop.id}>
                              {shop.name}
                            </li>
                    )
                  }

                  {/*{*/}

                    {/*shops.find(*/}
                        {/*arrayOfIngredients => arrayOfIngredients.ingriedients.map(*/}
                        {/*item => item.ingriedientId === ingredientsWithId.id).ingriedientId // :(*/}
                    {/*)*/}
                  {/*}*/}
                </ul>
              </div>
            </Col>
            {props.children}
          </div>

        </Col>

      </div>
  )
}
//
// <ul>
//   {
//     shopWithId.ingriedients.map(
//         shopIngre =>
//             ingredients.find(
//                 ingre =>
//                 ingre.id === shopIngre.ingriedientId
//             )
//     ).map(
//         item =>
//             <li key={item.id}>{item.name}</li>
//     )
//   }
//
// </ul>
//
// <ul>
// {
//   ingredientsWithId.ingriedients.map(     //nazwe skladnika trzeba poprawic
//     ingriedients =>
//
//           ingriedients.find (
//               ingr =>
//               ingr.id === ingriedients.ingriedientId
//           )
//             ).map(
//                 item =>
//                     <li key={item.id}>{item.name}</li>
//
//
// )
// }
// </ul>

{/*{*/
}
{/*ingredientsWithId.map(     //nazwe skladnika trzeba poprawic*/
}
{/*ingriedients =>*/
}

{/*ingriedients.find (*/
}
{/*ingr =>*/
}
{/*ingr.id === ingriedients.ingriedientId*/
}
{/*)*/
}
{/*).map(*/
}
{/*item =>*/
}
{/*<li key={item.id}>{item.name}</li>*/
}


{/*)*/
}
{/*}*/
}


{/*<ul>*/
}
{/*{*/
}
{/*ingredientsWithId.ingriedients.map(     //nazwe skladnika trzeba poprawic*/
}
{/*ingriedients =>*/
}
{/*<li key={ingriedients.ingriedientId}>*/
}
{/*{ingriedients.ingriedientId}*/
}
{/*<p key={shops.id}>{shops.ingriedients.find( item => item.ingriedientId === ingriedients.ingriedientId ).name}</p>*/
}
{/*</li>*/
}
{/*)*/
}
{/*}*/
}
{/*</ul>*/
}