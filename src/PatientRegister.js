import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Patient} from './Patient';

export class PatientRegister extends Component{
    render(){
        return(
            <div>
                <div>
                    <text>
                        SSN(just the number, no '-')
                    </text>
                    <div class="container">
                        <input type="password" name="uname" required/>
                        <div>
                            <text>
                                Address
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
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