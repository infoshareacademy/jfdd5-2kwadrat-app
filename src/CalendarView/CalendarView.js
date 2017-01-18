import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import {connect} from 'react-redux'
import {addEventToCalendar} from './CalendarReducer/actionCreator'
import {removeRecipeTitle} from '../CalendarView/CalendarReducer/actionCreator'
import {default as CalendarForm} from './CalendarForm/CalendarForm'
import {Modal, Button} from 'react-bootstrap'

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
            showModal: false
        }

        this.open = (info) => {
            this.setState({
                ...this.state,
                showModal: true,
                events: {
                    start: info.start,
                    end: info.end,
                    title: null
                }
            })
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

    // componentWillMount() {
    //     if (this.props.recipeTitle !== null) {
    //         this.setState({
    //             showModal: true
    //         })
    //     }
    // }


    addEventFromRecipeView = (dateInfo) => {

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
            events: []
        })
    }

    render() {
        return (
            <div>
                {}
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header>
                        <Modal.Title>
                            <h3>Co będziesz gotowac?</h3>
                        </Modal.Title>
                        <Modal.Body>
                            <input type="text" id="modalNameInput" defaultValue={this.props.recipeTitle}/>
                        </Modal.Body>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button onClick={this.close}>Potwierdż</Button>
                    </Modal.Footer>
                </Modal>
                {this.props.recipeTitle ? 'Wybierz datę w kalendarzu, żeby ugotować: ' + this.props.recipeTitle : null}
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