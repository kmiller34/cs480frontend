import React, {Component} from 'react'

export class ViewPatients extends Component{
    constructor(props){
        super(props);
        this.state = {
            patient: [],
            schedule: [],
            record: [],
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

    fetchVaccinationRecord = () => {
        fetch('http://127.0.0.1:8000/vaccinationRecord')
        .then((response) => response.json())
        .then((data) => {
            this.setState({record: data})
        })
        .catch((error) => {
            console.error('Error Fetching Vaccine Record')
        });
    };

    componentDidMount(){
        this.fetchPatients();
        this.fetchVaccinationSchedule();
        this.fetchVaccinationRecord();
    }
    render(){
        const {
            patient, schedule, record
        } = this.state;
        console.log(schedule);
        return(
            <div>
                <table>
                <thead>
                <tr>
                <th>ssn</th>
                    <th>name</th>
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
                        <td>{pat.name}</td>
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

                <table>
                    <thead>
                        <tr>
                            <th>
                                Vaccine Name
                            </th>
                            <th>Patient Name</th>
                            <th>Administred BY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((item) => (
                            <tr key = {item.recordID}>
                                <td>{item.vaccineID.name}</td>
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