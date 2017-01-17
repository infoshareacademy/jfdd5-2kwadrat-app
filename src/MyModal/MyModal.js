import React from 'react'
import {Modal, Button} from 'react-bootstrap'

class MyModal extends React.Component {
  constructor() {
    super()

    this.state = ({
        showModal: true
      }
    )

    this.open = () => {
      this.setState({showModal: true})
    }

    this.close = () => {
      this.setState({showModal: false})
    }

  }

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Open
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>
              <h1>Zaznacz na kalendarzu kiedy będziesz gotować</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.close}>Rozumiem</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default MyModal