import React from 'react'

import {NavigationView} from './NavigationView'

import './App.css'

export default (props) => (
  <div className="App">
    <NavigationView />
    {props.children}
  </div>
);