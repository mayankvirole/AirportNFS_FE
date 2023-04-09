import plane from "../assets/airplane.png";
import {BrowserRouter,Routes,Route,Link, useLocation} from "react-router-dom";
import AdminEdit from '../components/Admin-Edit-Flight-Details';
import AdminView from '../components/Admin-View-Flight-Details';
import AdminInfo from '../components/Admin-Information';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminMain() {
  let user = "";
  const [active,setActive]=useState(false);
  const location = useLocation();
  // const handleUser = (role) => {
  //   if(role === 'admin')
  //     setUser('admin');
  //   if(role === 'supervisor')
  //     setUser('supervisor')
  // }


  const Logout = () => {
    const navigate = useNavigate();
    navigate("/home")
  }

  useEffect(()=> {
   console.log(location.state);
  },[])
  return (
    <div className="App">
        <nav>
          <div className='header'>
            <h1>Airport Network Flight Scheduler</h1>
            <img src={plane} alt='plane' />
          </div>
          <nav>
              <ul className='nav-admin'>
              <li>
                <Link to="/ad-edit" >Edit Flight Details</Link>
              </li>
              <li>
                <Link to="/ad-info">Airport Supervisor Information</Link>
              </li>
              <li>
                <Link to="/ad-view">View Flight Details</Link>
              </li>
              <li className="logout" onClick={Logout}>
                Logout
              </li>
            </ul>
          </nav>
        </nav>
        <Routes>
          <Route path='/ad-edit' element={<AdminEdit />} />
          <Route path='/ad-view' element={<AdminView />} />
          <Route path='/ad-info' element={<AdminInfo />} />
        </Routes>
    </div>
  );
}

export default AdminMain;
