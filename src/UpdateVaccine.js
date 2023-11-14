import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export class UpdateVaccine extends Component{
    render(){
        return(
            <div>
                <div>
                    <text>
                        vaccineID
                    </text>
                    <div class="container">
                        <input type="password" name="uname" required/>
                        <div>
                            <text>
                                Company Name
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
                                Doses
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <div>
                            <text>
                                Availability
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <div>
                            <text>
                                On Hold
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
                        </div>
                        <div>
                            <text>
                                Description
                            </text>
                            <div></div>
                            <input type="text" name="psw" required/>
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