import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Patient} from './Patient';
import{variables} from './Variables'

export class PatientRegister extends Component{
    constructor(props){
        super(props);

        this.state = {
            ssn: "",
            address: "",
            age: "",
            gender: "",
            race: "",
            medicalHistory: "",
            occupationalClass: "",
            phoneNumber: "",
            username: ""
        }
    }

    handleFormSubmit = () => {
        const patientData = {
            ssn: this.state.ssn,
            address: this.state.address,
            age: this.state.age,
            race:this.state.race,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            medicalHistory:this.state.medicalHistory,
            occupationalClass:this.state.occupationalClass,
            name: this.state.name,
            username: this.state.username
        };
    
        fetch('http://127.0.0.1:8000/patient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nurseData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);})
            .catch((error) => {
                console.error('Error:', error);
            });
        };
    render(){
        return(
            <div>
                <div>
                    <text>
                        SSN(just the number, no '-')
                    </text>
                    <div class="container">
                        <input type="password" name="ssn" value = {this.state.ssn} onChange = {(e) => this.setState({ssn: e.target.value})} required/>
                        <div>
                            <text>
                                Address
                            </text>
                            <div></div>
                            <input type="text" name="address" value = {this.state.address} required/>
                        </div>
                        <div>
                            <text>
                                Age
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <div>
                            <text>
                                Gender
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <div>
                            <text>
                                Race
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <div>
                            <text>
                                Medical History
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <div>
                            <text>
                                Occupational Class
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <div>
                            <text>
                                Phone Number
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <div>
                            <text>
                                User Name
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <div>
                            <text>
                                Password
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <Link to = "/Patient">
                            <button type = "button">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}