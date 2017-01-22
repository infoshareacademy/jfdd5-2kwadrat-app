import React from 'react'
import {Grid, Row} from 'react-bootstrap'
import {NavigationView} from './NavigationView'
import './App.css'

export default (props) => (
  <div className="App">
    <NavigationView />
    <Grid>
      <Row>
        {props.children}
      </Row>
    </Grid>
  </div>
)