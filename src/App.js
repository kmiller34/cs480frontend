import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Admin} from './Admin';
import {Patient} from './Patient';
import {Nurse} from './Nurse';

import { PatientRegister } from './PatientRegister';
import {Signin} from './Signin';
import {UpdatePatient} from './UpdatePatient';
import { PatientScheduling } from './PatientSchedule';
import {ViewAccount} from './ViewAccount';
import {NurseRegister} from './NurseRegister';
import {ViewPatients} from './ViewPatients';
import {UpdateNurse} from './UpdateNurse';
import {UpdateVaccine} from './UpdateVaccine';
import { UpdateNurseInfo } from './UpdateNurseInfo';
import {AddVaccine} from './AddVaccine';
import {ViewNurse} from './ViewNurse';

import {BrowserRouter, Route,Routes,NavLink} from 'react-router-dom';

function App() {

  
  return (
    <BrowserRouter>
    <div>
      <div class = "topnav">
        <NavLink className = "btn btn-light btn-outline-primary" to = "/home">Home</NavLink>      
        <NavLink className = "btn btn-light btn-outline-primary" to ="/signin">
          Sign In
        </NavLink>
      </div>
      {/*
      <nav className = "navbar navbar-expand-sm bg-light navbar-dark">
        <ul className = "navbar-nav">
          <li className = "nav-item- m-1">
            <NavLink className = "btn btn-light btn-outline-primary" to ="/home">
              Home
            </NavLink>
          </li>
          <li className = "nav-item- m-1">
            <NavLink className = "btn btn-light btn-outline-primary" to ="/admin">
              Admin
            </NavLink>
          </li>
          <li className = "nav-item- m-1">
            <NavLink className = "btn btn-light btn-outline-primary" to ="/patient">
              Patient
            </NavLink>
          </li>
          <li className = "nav-item- m-1">
            <NavLink className = "btn btn-light btn-outline-primary" to ="/nurse">
              Nurse
            </NavLink>
          </li>
        </ul>
  </nav>*/}
      <Routes>
        <Route path = '/signin' element = {<Signin/>}/>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/admin' element = {<Admin/>}/>
        <Route path = '/nurse' element = {<Nurse/>}/>
        <Route path = '/patient' element = {<Patient/>}/>
        <Route path="/patientRegister" element={<PatientRegister/>} />
        <Route path = "/updatePatient" element={<UpdatePatient/>}/>
        <Route path = "/patientScheduling" element={<PatientScheduling/>}/>
        <Route path = "/viewAccount" element={<ViewAccount/>}/>
        <Route path = "/nurseRegister" element = {<NurseRegister/>}/>
        <Route path = "/viewPatients" element = {<ViewPatients/>}/>
        <Route path = "/updateNurse" element = {<UpdateNurse/>}/>
        <Route path = "/updateVaccine" element = {<UpdateVaccine/>}/>
        <Route path = "/updateNurseInfo" element = {<UpdateNurseInfo/>}/>
        <Route path = "/addVaccine" element = {<AddVaccine/>}/>
        <Route path = "/viewNurse" element = {<ViewNurse/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
