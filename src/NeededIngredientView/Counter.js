import React from 'react'
import { Button } from 'react-bootstrap'

export default class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      value: 0
    }

    this.handleIncreaseClick = () => this.setState({
      value: Math.min(this.state.value + 1, 100)
    })

    this.handleDecreaseClick = () => this.setState({
      value: Math.max(this.state.value - 1, 0)
    })
  }

  componentWillMount() {
    this.setState({
      value: parseInt(this.props.params.initialValue, 10) || 0
    })
  }

  render() {
    return (
      <div>
        <h2 id="test">{this.state.value}</h2>
        <Button bsStyle="success" onClick={this.handleIncreaseClick}>+1</Button>
        <Button bsStyle="danger" onClick={this.handleDecreaseClick}>-1</Button>
      </div>
    )
  }
}