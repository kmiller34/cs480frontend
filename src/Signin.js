import React, {Component} from 'react'
import {variables} from './Variables.js'
import {patientRegister} from './PatientRegister.js'


import {Link} from 'react-router-dom';

export class Signin extends Component{
    constructor(props){
        super(props);
            this.state = {
                credentials:[]
            }
    }

    checkCredentials(){
        fetch(variables.API_URL + 'credentials',{
            method:'GET'
        })
        .then(response => {
            if (response.ok){
                return response.json();
            }
            else{
                throw new Error('Failed to fetch credentials');
            }
        })
        .then(data => {
            
        })
        .catch(error => {
            console.error(error);
        })
    }
    
    render(){
        return(
            <div>
                <div class = "form">
                    <h3>
                        Please Sign In
                    </h3>
                    <div class="container">
                    
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                        <div>
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required/>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                patient
                            </label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                nurse
                            </label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                admin
                            </label>
                        </div>
                        <button type="submit">Login</button>
                        <Link to="/PatientRegister">
                            <button type = "button">Register</button>  
                        </Link>                      
                </div>
                </div>
            </div>
            
        )
    }
}