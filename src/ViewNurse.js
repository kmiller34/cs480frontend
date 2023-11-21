import React, {Component} from 'react'

export class ViewNurse extends Component{
    constructor(props){
        super(props);
        this.state = {
            nurse: [],
            schedule: [],
        };
    }
  

    fetchPatients = () => {
        fetch('http://127.0.0.1:8000/nurse')
        .then(response => response.json())
        .then(data=> {
            // console.log("Patient Data:", data);
            this.setState({nurse:data});
        })
        .catch(error => {
            console.error("Error Fetching Patients")
        });
    };

    fetchVaccinationSchedule = () => {
        fetch('http://127.0.0.1:8000/vaccinationScheduling')
        .then((response) => response.json())
        .then((data) => {
            this.setState({schedule: data})
        })
        .catch((error) =>{
            console.error('Error Fetching Vaccination Schedule');
        });
    };

    deleteClick(employeeID){
        if(window.alert("Are you sure?")){
            fetch('http://127.0.0.1:8000/nurse' + employeeID,{
                method: 'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json)
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert("Failed");
            })
        }
    }
    componentDidMount(){
        this.fetchPatients();
        this.fetchVaccinationSchedule();
    }
    render(){
        const {
            nurse, schedule
        } = this.state;
        console.log(schedule);
        return(
            <div>
                <table>
                <thead>
                <tr>
                <th>Employee ID</th>
                    <th>name</th>
                    <th>address</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>phone number</th>
                    <th>username</th>
                    <th>Delete</th>
                </tr> 
                </thead>
                <tbody>
                    {nurse.map(pat => (
                    <tr key={pat.employeeID}>
                        <td>{pat.employeeID}</td>
                        <td>{pat.name}</td>
                        <td>{pat.address}</td>
                        <td>{pat.age}</td>
                        <td>{pat.gender}</td>
                        <td>{pat.phoneNumber}</td>
                        <td>{pat.username}</td>
                        <td>
                            <button type = "button" 
                            
                            onClick = {() => this.deleteClick(pat.employeeID)}>
                                delete
                            </button>
                        </td>
                    <td>{/* Display scheduled vaccines here */}</td>
                </tr>
                    ))}    
                </tbody>               
                </table>
                <div></div>
                
                <table>
                    <thead>
                        <tr>
                            <th>
                                Time
                            </th>
                            <th>Patient</th>
                            <th>Nurse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((item) => (
                            <tr key={item.vaccID}>
                                <td>{item.timeSlot}</td>
                                <td>{item.patientID.name}</td>
                                <td>{item.nurseID.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}