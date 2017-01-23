import React from 'react'
import { Button } from 'react-bootstrap'

export default class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };

    this.handleIncreaseClick = () => this.setState({
      value: Math.min(this.state.value + 1, 20)
    });

    this.handleDecreaseClick = () => this.setState({
      value: Math.max(this.state.value - 1, 0)
    })
  }

  componentWillMount() {
    this.setState({
      value: 0
    })
  }

  render() {
    return (
      <div className="counterArea">
        <h2 id="counterValue">{this.state.value}</h2>

        <Button className='counterButton' bsStyle="success" onClick={this.handleIncreaseClick}>+1</Button>

        <Button className='counterButton' bsStyle="danger" onClick={this.handleDecreaseClick}>-1</Button>
      </div>
    )
  }
}