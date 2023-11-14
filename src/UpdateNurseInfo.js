import React, { Component } from "react"

import {Link} from 'react-router-dom'

export class UpdateNurseInfo extends Component{
    render(){
        return(
            <div>
                <div>
                    <text>
                        Phone Number
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
                    </div>
                    <Link to="/Nurse">
                        <button text="buttons">Update</button>
                    </Link>
                 </div>
            </div>
        )
    }
}
