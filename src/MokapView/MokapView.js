import  React from 'react'
import './Mokap.css'

export default (props)=> {
  return (
    <div className="mokap">
      <div className="screen">

        {props.children}
      </div>
    </div>
  )
}