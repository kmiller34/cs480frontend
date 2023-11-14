import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export class UpdateNurse extends Component{
    render(){
        return(
            <div>
                <div>
                    <text>
                        employeeID
                    </text>
                    <div class="container">
                        <input type="text" name="uname" required/>
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
                                Phone Number
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
                                Name
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
                            <input type="password" name="psw" required/>
                        </div>
                        <Link to = "/Admin">
                            <button type = "button">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}