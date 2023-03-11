import './App.css';
import plane from "./assets/airplane.png"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Arrival from './components/Arrival';
import Departure from './components/Departure';
import Home from './components/Home';
import Admin from './components/Admin';
import Supervisor from './components/Supervisor';
import AdminMain from './components/Admin-Main';
import {useState} from 'react';
function App() {
  const[user, setUser] = useState("admin");
  const [active,setActive]=useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div className='header'>
            <h1>Airport Network Flight Scheduler</h1>
            <img src={plane} alt='plane' />
          </div>
          <nav>
            {(user === "" || user === '' || user === null) &&
              (<ul className='nav'>
              <li>
                <Link to="/home" >Home</Link>
              </li>
              <li>
                <Link to="/arrival">Arrival</Link>
              </li>
              <li>
                <Link to="/departure">Departure</Link>
              </li>
            </ul>)}
            {(user === "admin") &&
              (<ul className='nav-admin'>
              <li>
                <Link to="/home" >Edit Flight Details</Link>
              </li>
              <li>
                <Link to="/arrival">Airport Supervisor Information</Link>
              </li>
              <li>
                <Link to="/departure">View Flight Details</Link>
              </li>
              <li>
                Logout
              </li>
            </ul>)}
            {(user === "supervisor") &&
              (<ul className='nav'>
              <li>
                <Link to="/home" >Flight Details</Link>
              </li>
              <li>
                <Link to="/arrival">Flight Timings</Link>
              </li>
              <li>
                Logout
              </li>
            </ul>)}
          </nav>
        </nav>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/arrival' element={<Arrival />} />
          <Route path='/departure' element={<Departure />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/supervisor' element={<Supervisor />} />
          <Route path='/ad-main' element={<AdminMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
