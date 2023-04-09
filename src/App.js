import './App.css';
import {Link} from "react-router-dom";
import Nav from "./components/Nav";
import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function App() {
  return (
    <>
      <div className="App">
        <nav>
          <Nav />
          <nav>
            <ul className='nav'>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/arrival">Arrival</Link>
              </li>
              <li>
                <Link to="/departure">Departure</Link>
              </li>
            </ul>
          </nav>
        </nav>
      </div>
    </>
  );
}

export default App;
