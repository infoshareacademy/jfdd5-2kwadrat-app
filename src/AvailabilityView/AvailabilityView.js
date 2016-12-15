import React from 'react'
import { ShopsLogoView } from './ShopsLogoView'



export default (props) => (
  <div>
    <ShopsLogoView/>
      {props.children}
  </div>
)