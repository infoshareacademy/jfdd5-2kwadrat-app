import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import {connect} from 'react-redux'
import {removeRecipeTitle} from '../CalendarView/CalendarReducer/actionCreator'
import {default as CalendarForm} from './CalendarForm/CalendarForm'
import {addCalendarEvent,fetchCalendarEvents} from '../FavouriteReducer/actionCreatos'
import {Modal, Button} from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animations.css'

BigCalendar.momentLocalizer(moment)

moment.locale("pl")

const mapStateToProps = state => ({
  recipeTitle: state.calendarData.presentEventTitle,
  session: state.currentUserData.session,
  calendarEvents: state.favourite.calendarEvents
})

const mapDispatchToProps = dispatch => ({
  removeRecipe: () => dispatch(removeRecipeTitle()),
  addToCalendar: (userId,accessToken,event) => dispatch(addCalendarEvent(userId,accessToken,event)),
  fetchEvents: (userId, accessToken) => dispatch(fetchCalendarEvents(userId, accessToken))
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
      this.props.addToCalendar(this.props.session.userId, this.props.session.id, event)
      this.props.fetchEvents(this.props.session.userId, this.props.session.id)

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
        this.props.addToCalendar(this.props.session.userId, this.props.session.id, this.state.events)
    this.props.fetchEvents(this.props.session.userId, this.props.session.id)
        this.setState({
            events: []
        })
    }

  componentWillMount() {
    this.props.fetchEvents(this.props.session.userId, this.props.session.id)
  }

  render() {
    return (
        <ReactCSSTransitionGroup
            transitionName="fadeAllRecipes"
            transitionEnterTimeout={0}
            transitionAppearTimeout={400}
            transitionLeaveTimeout={0}
            transitionAppear={true}>
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
            events={this.props.calendarEvents}
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
        </ReactCSSTransitionGroup>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)