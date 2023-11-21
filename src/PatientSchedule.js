import React, { Component } from 'react';
import{Link} from 'react-router-dom'

export class PatientScheduling extends Component {

  render() {
    return (
        <div>
            <div>
                <text>
                    patientID
                </text>
                <div></div>
                <input type="text" required/>
            </div>

            <div>
                <text>
                    vaccineID
                </text>
                <div></div>
                <input type ="text" required/>
            </div>
            <div>
                <text>
                    Time (Please enter in Year-Month-Day Hour:Minute:Second)
                </text>
                <div></div>
                <input type = "text" required/>
            </div>
            <div>
                <text>
                    Nurse (If applicable)
                </text>
                <div></div>
                <input type = "text"/>
            </div>

            <Link to = "/Patient">
                <button>
                    Schedule
                </button>
            </Link>
        </div>
        
    );
  }
}