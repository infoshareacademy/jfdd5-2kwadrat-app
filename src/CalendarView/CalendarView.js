import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import {connect} from 'react-redux'
import {addEventToCalendar} from './CalendarReducer/actionCreator'
import Prompt from'react-bootstrap-prompt'

BigCalendar.momentLocalizer(moment)

const mapStateToProps = state => ({
  userEvents: state.calendarData.calendarEvents
})

const mapDispatchToProps = dispatch => ({
  addEvent: (event) => dispatch(addEventToCalendar(event))
})


class CalendarView extends React.Component {

  constructor() {
    super()

    this.state = {
      events: []
    }
  }

  addEvent = (dateInfo) => {
    const eventTitle = prompt('Co będziesz gotować?')
    const durationTime = parseInt(prompt('Jak długo będziesz gotowac?'),10)

    this.setState({
      ...this.state,
        events: this.state.events.concat({
          start: new Date(dateInfo.start.getFullYear(), dateInfo.start.getMonth(), dateInfo.start.getDate(), dateInfo.start.getHours()),
          end: new Date(dateInfo.end.getFullYear(), dateInfo.end.getMonth(), dateInfo.end.getDate(), dateInfo.start.getHours() + durationTime),
          title: eventTitle
        })
      }
    )
    console.log(this.state.events)
    this.props.addEvent(this.state.events)
  }

  componentDidUpdate(){
   console.log('updated')

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
            onSelectSlot={(slotInfo) => this.addEvent(slotInfo)}
            events={this.state.events}
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
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CalendarView)