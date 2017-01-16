import React from 'react'
import {DropdownButton, MenuItem, Button} from 'react-bootstrap'

class CalendarForm extends React.Component {

    render() {
        return(
            <div style={{height: 500}}>
               <h1>Calendar ZUPA</h1>
                <DropdownButton title="Trudność:" id="bg-vertical-dropdown-2">
                    <MenuItem eventKey="1">Hard</MenuItem>
                    <MenuItem eventKey="2">Light</MenuItem>
                </DropdownButton>
            </div>
        )
    }

}

export default CalendarForm