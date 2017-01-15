import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import {connect} from 'react-redux'
import {addEventToCalendar} from './CalendarReducer/actionCreator'
import {removeRecipeTitle} from '../CalendarView/CalendarReducer/actionCreator'
import MyModal from '../MyModal/MyModal'
import {Modal, Button} from 'react-bootstrap'

BigCalendar.momentLocalizer(moment)

const mapStateToProps = state => ({
  userEvents: state.calendarData.calendarEvents,
  recipeTitle: state.calendarData.presentEventTitle,
})

const mapDispatchToProps = dispatch => ({
  addEvent: (event) => dispatch(addEventToCalendar(event)),
  removeRecipe: () => dispatch(removeRecipeTitle())
})

class CalendarView extends React.Component {

  constructor() {
    super()

    this.state = {
      events: [],
      showModal: false
    }
    this.open = () => {
      this.setState({
        ...this.state,
        showModal: true
      })
    }
    this.close = () => {
      const eventTitle = document.getElementById('modalNameInput').value
      this.setState({
        ...this.state,
        showModal: false,
      })
      console.log(eventTitle)
    }


  }


  addEventFromRecipeView = (dateInfo) => {

    console.log(this.props.recipeTitle)
    this.setState({
        events: {
          start: dateInfo.start,
          end: dateInfo.end,
          title: this.props.recipeTitle
        }
      },
    )
    this.props.removeRecipe()
    this.props.addEvent(this.state.events)
    this.setState({
      events:[]
    })
  }

  addEvent = (dateInfo) => {
    this.open()
    const eventTitle = document.getElementById('modalNameInput').value
    console.log('moja zupa' , eventTitle)
    eventTitle ? ( this.setState({
        events: {
          start: dateInfo.start,
          end: dateInfo.end,
          title: eventTitle
        }
      })
    ) : ''
    this.props.addEvent(this.state.events)
    this.setState({
      events:[]
    })
  }

  componentWillMount() {
    return (
      <MyModal/>
    )
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>
              <h3>Co będziesz gotowac?</h3>
            </Modal.Title>
            <Modal.Body>
              <input type="text" id="modalNameInput"/>
            </Modal.Body>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.close}>Potwierdż</Button>
          </Modal.Footer>
        </Modal>
        <h1>Kalendarz</h1>
        <div style={{height: 500}}>

          <BigCalendar
            selectable
            popup
            onSelectEvent={event => alert('Termin już zajęty!   ' + event.title)}
            onSelectSlot={(slotInfo) =>
              this.props.recipeTitle === null ?
                this.addEvent(slotInfo) :
                this.addEventFromRecipeView(slotInfo)

            }
            events={this.props.userEvents}
            step={15}
            timeslots={6}
            defaultView='week'
            defaultDate={new Date()}
            messages={{
              allDay: 'cały dzień',
              week: 'tydzień',
              day: 'dzień',
              month: 'miesiąc',
              next: 'następny',
              back: 'wstecz',
              today: 'dziś'
            }}
          />
          {}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)