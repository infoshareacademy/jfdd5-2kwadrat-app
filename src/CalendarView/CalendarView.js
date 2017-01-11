import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

BigCalendar.momentLocalizer(moment)


class CalendarView extends React.Component {

  constructor() {
    super()

    this.state = {
      events: []
    }
  }

  addEvent = (dateInfo) => {
    const eventTitle = prompt('Podaj nazwę wydarzenia:',
      'nazwa wydarzenia')
    const durationTime = parseInt(prompt('podaj czas trwania:'))
    console.log(typeof dateInfo.start.getHours())
    this.setState({
        events: this.state.events.concat({
          start: new Date(dateInfo.start.getFullYear(), dateInfo.start.getMonth(), dateInfo.start.getDate(), dateInfo.start.getHours()),
          end: new Date(dateInfo.end.getFullYear(), dateInfo.end.getMonth(), dateInfo.end.getDate(), dateInfo.start.getHours() + durationTime),
          title: eventTitle
        })
      }
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
              back: 'poprzedni',
              today: 'dziś'
            }}

          />
        </div>
      </div>
    )
  }
}

export default CalendarView