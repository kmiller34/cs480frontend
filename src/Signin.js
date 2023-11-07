import React, {Component} from 'react'
import {variables} from './Variables.js'

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
                    <button type="submit">Login</button>
                </div>
            </div>
        )
    }
}