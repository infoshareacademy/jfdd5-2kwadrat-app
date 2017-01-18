import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
import './InstructionView.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations.css'


export default () => (
    <ReactCSSTransitionGroup
        transitionName="fadeInstruction"
        transitionAppearTimeout={500}
        transitionAppear={true}>
  <div className="instruction-view">
    <ReactCSSTransitionGroup
        transitionName="slideInLeft"
        transitionAppearTimeout={500}
        transitionAppear={true}>
    <Col key="ssss" xs={4} className="instruction-image">
      <img src={process.env.PUBLIC_URL + '/images/fridge-512.png'}
           alt="lodowka"
           height={240}
      />
    </Col>
    </ReactCSSTransitionGroup>

    <ReactCSSTransitionGroup
        transitionName="slideInRight"
        transitionAppearTimeout={500}
        transitionAppear={true}>
    <Col xs={6}>
      <h2 className="instruction-text">
        Wypełnij <Link to={'/filtered-recipes'}><span className="span-button">formularz</span></Link>, a nasza wyszukiwarka znajdzie<br/>
        <Link to={'/filtered-recipes'}><span className="span-button">Przepisy dla Ciebie</span></Link>.
      </h2>
    </Col>
    </ReactCSSTransitionGroup>
  </div>
    </ReactCSSTransitionGroup>
)