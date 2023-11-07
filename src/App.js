import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Admin} from './Admin';
import {Patient} from './Patient';
import {Nurse} from './Nurse';
import {Signin} from './Signin'
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
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
