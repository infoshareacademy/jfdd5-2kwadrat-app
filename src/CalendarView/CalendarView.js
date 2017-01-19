import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import {connect} from 'react-redux'
import {addEventToCalendar} from './CalendarReducer/actionCreator'
import {removeRecipeTitle} from '../CalendarView/CalendarReducer/actionCreator'
import {default as CalendarForm} from './CalendarForm/CalendarForm'
import {Modal, Button} from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations.css'

BigCalendar.momentLocalizer(moment)

moment.locale("pl")

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
      events: null,
      showModal: false,
      showModal2: true
    }

    this.open = (dateInfo) => {
      this.setState({
        ...this.state,
        showModal: true,
        events: {
          start: dateInfo.start,
          end: new Date(dateInfo.end.getFullYear(), dateInfo.end.getMonth(), dateInfo.start.getDate(), dateInfo.start.getHours() + 2),
          title: null
        }
      })
    }
    this.close2 = () => {
      this.setState({
          showModal2: false
        }
      )
    }
    this.close = () => {
      const eventTitle = document.getElementById('modalNameInput').value
      const event = {
        start: this.state.events.start,
        end: this.state.events.end,
        title: eventTitle
      }
      this.setState({
        events: null,
        showModal: false
      })
      this.props.addEvent(event)

    }
  }

  addEventFromRecipeView = (dateInfo) => {
        this.setState({
                events: {
                    start: dateInfo.start,
                    end: new Date(dateInfo.end.getFullYear(), dateInfo.end.getMonth(), dateInfo.start.getDate(), dateInfo.start.getHours() + 2),
                    title: this.props.recipeTitle
                }
            },
        )
        this.props.removeRecipe()
        this.props.addEvent(this.state.events)
        this.setState({
            events: []
        })
    }

  render() {
    return (
      <div>
        <Modal show={this.state.showModal2} onHide={this.close2}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Mała uwaga :)</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>
            {this.props.recipeTitle ? ' Zaznacz w kalendarzu kiedy chcesz zacząc gotować ' + this.props.recipeTitle : 'Wybierz na kalendarzu kiedy chcesz cos ugotować'}
            <br/>
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close2} bsStyle="success">Zrozumiałem </Button>

          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Wybierz danie:</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CalendarForm/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} bsStyle="success">Potwierdż</Button>
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
                this.open(slotInfo) :
                this.addEventFromRecipeView(slotInfo)

            }
            events={this.props.userEvents}
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

          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)