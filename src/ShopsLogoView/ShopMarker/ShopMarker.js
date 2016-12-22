import React from 'react'
import { Image } from 'react-bootstrap'

export default (props) => (
    <div>
        <Image src={props.img}
               height="50px"
               width="auto"
               rounded
        />
        {props.name}
    </div>
)