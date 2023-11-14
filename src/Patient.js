import React, {Component} from 'react'
import {UpdatePatient} from './UpdatePatient';
import { ViewAccount } from './ViewAccount';
import {BrowserRouter, Route,Routes,NavLink} from 'react-router-dom';
export class Patient extends Component{
    render(){
        return(
            <div class = "navbar">
                <NavLink className = "btn btn-light btn-outline-primary" to = "/updatePatient">Update Info</NavLink>      
                <NavLink className = "btn btn-light btn-outline-primary" to ="/patientScheduling">
                    Scheduling
                </NavLink>
                <NavLink className = "btn btn-light btn-outline-primary" to ="/viewAccount">
                    View Account
                </NavLink>
            </div>
        )
    }
}