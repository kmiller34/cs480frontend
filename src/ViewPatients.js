import React, {Component} from 'react'

export class ViewPatients extends Component{
    constructor(props){
        super(props);
        this.state = {
            patient: [],
        };
    }
    

    fetchPatients = () => {
        fetch('http://127.0.0.1:8000/patient')
        .then(response => response.json())
        .then(data=> {
            // console.log("Patient Data:", data);
            this.setState({patient:data});
        })
        .catch(error => {
            console.error("Error Fetching Patients")
        });
    };

    componentDidMount(){
        this.fetchPatients();
        // this.refreshList();
    }
    render(){
        const {
            patient
        } = this.state;
        console.log(patient);
        return(
            <div>
                <table>
                <thead>
                <tr>
                <th>ssn</th>
                    
                    <th>address</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>race</th>
                    <th>
                    medical history
                    </th>
                    <th>occupation</th>
                    <th>phone number</th>
                    <th>username</th>
                </tr> 
                </thead>
                <tbody>
                    {patient.map(pat => (
                    <tr key={pat.ssn}>
                        <td>{pat.ssn}</td>
                        
                        <td>{pat.address}</td>
                        <td>{pat.age}</td>
                        <td>{pat.gender}</td>
                        <td>{pat.race}</td>
                        <td>{pat.medicalHistory}</td>
                        <td>{pat.occupationalClass}</td>
                        <td>{pat.phoneNumber}</td>
                        <td>{pat.username}</td>
                    <td>{/* Display scheduled vaccines here */}</td>
                </tr>
                    ))}    
                </tbody>               
                </table>
            </div>
        )
    }
}