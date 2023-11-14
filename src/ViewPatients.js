import React, {Component} from 'react'

export class ViewPatients extends Component{
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
                    <th>Scheduled Vaccines</th>
                </tr>                
                </table>
            </div>
        )
    }
}