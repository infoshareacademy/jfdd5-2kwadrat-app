import React from 'react'
import './styles.css';

import { FormGroup, Checkbox, Image, Grid, Row, Col } from 'react-bootstrap'

export default () => (
  <div>
    <h1>FridgeView</h1>
      {/*<FormGroup>*/}
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={4}>
                <Image src="/assets/thumbnail.png" responsive />
                <Checkbox inline>
                1. link do 'ingredients.id'
                </Checkbox>
            </Col>

            <Col xs={12} sm={6} md={4}>
                <Image src="/assets/thumbnail.png" responsive />
                <Checkbox inline>
                2. link do 'ingredients.id'
                </Checkbox>
            </Col>

            <Col xs={12} sm={6} md={4}>
                <Image src="/assets/thumbnail.png" responsive />
                <Checkbox inline>
                3. link do 'ingredients.id'
                </Checkbox>
            </Col>
          </Row>
        </Grid>
  {/*</FormGroup>*/}
  </div>
)