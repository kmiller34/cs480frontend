import React, {Component} from 'react'
import {ViewPatients} from './ViewPatients' 
import {NurseRegister} from './NurseRegister'
import {BrowserRouter, Route,Routes,NavLink} from 'react-router-dom'

export class Admin extends Component{
    render(){
        return(
            <div class = "navbar">
                <NavLink className = "btn btn-light btn-outline-primary" to = "/updateVaccine">Update Vaccine Info</NavLink>      
                <NavLink className = "btn btn-light btn-outline-primary" to ="/nurseRegister">
                    Add Nurse
                </NavLink>
                <NavLink className = "btn btn-light btn-outline-primary" to ="/updateNurse">
                    Update Nurses Info
                </NavLink>
                <NavLink className = "btn btn-light btn-outline-primary" to ="/viewPatients">View Patient Info</NavLink>

            </div>
        )
    }
}