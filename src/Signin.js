import React, {Component} from 'react'
import {variables} from './Variables.js'
import {patientRegister} from './PatientRegister.js'


import {Link} from 'react-router-dom';

export class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            position: "",
            errorMessage: "",
            redirect : null
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleUserTypeChange = (e) => {
        this.setState({
            userType: e.target.value,
        });
    }

    checkCredentials = () => {
        const { username, password, position } = this.state;

        fetch('http://127.0.0.1:8000/credentials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                position
            }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to authenticate');
            }
        })
        .then(data => {
            if (data.isAuthenticated) {
                switch (position) {
                    case 'patient':
                      
                        this.setState({ redirect: '/patient' });
                        break;
                    case 'nurse':
                     
                        this.setState({ redirect: '/nurse' });
                        break;
                    case 'admin':
                       
                        this.setState({ redirect: '/admin' });
                        break;
                    default:
                       
                        break;
                }
            } else {
                // Handle authentication failure
                this.setState({ errorMessage: 'Invalid credentials' });
                console.log("Username" + username);
            }
        })
        .catch(error => {
            console.error(error);
            
            this.setState({ errorMessage: 'Failed to authenticate' });
        });
    }
    
    render(){
        return(
            <div>
                <div className="form">
                    <h3>Please Sign In</h3>
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" onChange={this.handleInputChange} required />
                        <div>
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={this.handleInputChange} required />
                        </div>
                        <div className="form-check">
                            {/* Radio buttons for user type selection */}
                            <input
                                className="form-check-input"
                                type="radio"
                                name="userType"
                                id="flexRadioDefault1"
                                value="patient"
                                checked={this.state.userType === 'patient'}
                                onChange={this.handleUserTypeChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Patient</label>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="userType"
                                id="flexRadioDefault1"
                                value="nurse"
                                checked={this.state.userType === 'nurse'}
                                onChange={this.handleUserTypeChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Nurse</label>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="userType"
                                id="flexRadioDefault1"
                                value="admin"
                                checked={this.state.userType === 'admin'}
                                onChange={this.handleUserTypeChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Admin</label>
                            {/* Similar radio buttons for 'nurse' and 'admin' */}

                        </div>
                        <button type="button" onClick={this.checkCredentials}>Login</button>
                        <p className="error-message">{this.state.errorMessage}</p>
                        <Link to="/PatientRegister">
                            <button type="button">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        )
    }
}