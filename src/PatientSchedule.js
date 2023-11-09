import React, {Component} from 'react'
import {variables} from './Variables.js';
import {BrowserRouter, Route,Routes,NavLink} from 'react-router-dom';
export class PatientScheduling extends Component{

    // constructor(props){
    //     super(props);

    //     this.state={
    //         vaccineScheduling:[]
    //     }
    // }

    // refreshList(){
    //     fetch(variables.API_URL+'vaccineScheduling')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         this.setState({vaccineScheduling:data})
    //     });
    // }
    // componentDidMount(){
    //     this.refreshList();
    // }
    
    render(){
        // const{
        //     vaccineScheduling
        // }=this.state;
        return(

            <div className='form'>
                <table>
                
                <tr>
                    <th>
                        Time
                    </th>
                    <th>Vaccine</th>
                    <th>Nurse</th>
                </tr>
                
                {/* <tbody>
                    {vaccineScheduling.map(dep=>
                        <tr key = {dep.patientID}>
                            <td>{dep.timeSlot}</td>
                        </tr>)}
                </tbody> */}
                
                </table>
                <button type="button" class="btn btn-outline-danger">Delete</button>
            </div>
        )
    }
}