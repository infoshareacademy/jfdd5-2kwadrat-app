import React from 'react'
import { FormControl, FormGroup} from 'react-bootstrap'

import '../CalendarView.css'
import recipes from '../../data/recipes'

class CalendarForm extends React.Component {

    render() {
        return (
            <div >


                <FormGroup>
                    <FormControl componentClass="select"
                                 className="zupa"
                                 id="modalNameInput"
                                 placeholder="select">
                        {
                            recipes.map(
                                recipe =>
                                    <option value={recipe.name} key={recipe.name}>{recipe.name}</option>
                            )
                        }
                    </FormControl>
                </FormGroup>
            </div>
        )
    }

}

export default CalendarForm