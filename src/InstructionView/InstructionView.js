import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
import './InstructionView.css'

export default () => (
  <div className="instruction-view">
    <Col xs={4} className="instruction-image">
      <img src={process.env.PUBLIC_URL + '/images/fridge-512.gif'}
           alt="lodowka"
           height={240}
      />
    </Col>

    <Col xs={6}>
      <h2 className="instruction-text">
        Wypełnij <span className="span-button"><Link to={'/form'}>formularz</Link></span>, a nasza wyszukiwarka znajdzie<br/>
        <span className="span-button"><Link to={'/filtered-recipes'}>Przepisy dla Ciebie</Link></span>.
      </h2>
    </Col>
  </div>
)