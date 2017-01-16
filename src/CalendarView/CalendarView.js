import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import {connect} from 'react-redux'
import {addEventToCalendar} from './CalendarReducer/actionCreator'
import {removeRecipeTitle} from '../CalendarView/CalendarReducer/actionCreator'
import {default as CalendarForm} from './CalendarForm/CalendarForm'

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
      events: []
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
    const eventTitle = prompt('Co będziesz gotować?')
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
      this.props.recipeTitle === null ?
        '' : alert('Zaznacz na kalendarzu kiedy chcesz ugotować danie.')
    )
  }

  render() {
    return (
      <div>
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
          <CalendarForm/>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)