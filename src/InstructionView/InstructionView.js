import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
import './InstructionView.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations.css'


export default () => (
    <ReactCSSTransitionGroup
        transitionName="fadeInstruction"
        transitionEnterTimeout={0}
        transitionAppearTimeout={500}
        transitionLeaveTimeout={0}
        transitionAppear={true}>
  <div className="instruction-view">
    <ReactCSSTransitionGroup
        transitionName="slideInLeft"
        transitionLeaveTimeout={0}
        transitionAppearTimeout={500}
        transitionEnterTimeout={0}
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
        transitionLeaveTimeout={0}
        transitionAppearTimeout={500}
        transitionEnterTimeout={0}
        transitionAppear={true}>
    <Col xs={6}>
      <h2 className="instruction-text">Wypełnij formularz, a nasza wyszukiwarka znajdzie</h2>

      <br/>
        <Link to={'/filtered-recipes'}><button className="simpleButton">Przepisy dla Ciebie  </button></Link>
    </Col>
    </ReactCSSTransitionGroup>
  </div>
    </ReactCSSTransitionGroup>
)