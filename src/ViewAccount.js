import React, {Component} from 'react'
import {BrowserRouter, Route,Routes,NavLink} from 'react-router-dom';
export class ViewAccount extends Component{
    render(){
        return(
            <div>
                <table>
                
                <tr>
                    <th>
                    medical history
                    </th>
                    <th>address</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>race</th>
                    <th>ssn</th>
                    <th>occupation</th>
                    <th>phone number</th>
                    <th>username</th>
                </tr>                
                </table>
            </div>
        )
    }
}