import React from 'react'
import {DropdownButton, MenuItem, Button, FormControl, FormGroup,ControlLabel} from 'react-bootstrap'

import '../CalendarView.css'
import recipes from '../../data/recipes'

class CalendarForm extends React.Component {

    render() {
        return(
            <div style={{height: 500}}>
               <h1>Calendar ZUPA</h1>
                <DropdownButton title="Trudność:" id="bg-vertical-dropdown-2">
                    <MenuItem eventKey="1">Hard</MenuItem>
                    <MenuItem eventKey="2">Light</MenuItem>
                </DropdownButton>

                <DropdownButton title="Trudność:" id="bg-vertical-dropdown-2">
                    <MenuItem eventKey="1">Hard</MenuItem>
                    <MenuItem eventKey="2">Light</MenuItem>
                </DropdownButton>

                <DropdownButton title="Przepis:" id="bg-vertical-dropdown-2">
                    {recipes.map(
                        recipe =>
                            <MenuItem eventKey={recipe.id}>{recipe.name}</MenuItem>
                    )}

                    <MenuItem eventKey="1">Hard</MenuItem>

                </DropdownButton>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Wybierz danie:</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onChange={(data) => console.log(data.target.value)}>
                        {
                            recipes.map(
                            recipe =>
                                <option  value={recipe.name} key={recipe.name}>{recipe.name}</option>
                        )
                        }


                    </FormControl>
                </FormGroup>
            </div>
        )
    }

}

export default CalendarForm