import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

export class Nurse extends Component{
    render(){
        return(
            <div class = "navbar">
                <NavLink className = "btn btn-light btn-outline-primary" to = "/updateVaccine">Schedule an Appointment</NavLink>      
                <NavLink className = "btn btn-light btn-outline-primary" to ="/updateNurseInfo">
                    Update Info
                </NavLink>
                <NavLink className = "btn btn-light btn-outline-primary" to ="/viewPatients">View Info</NavLink>
            </div>
        )
    }
}