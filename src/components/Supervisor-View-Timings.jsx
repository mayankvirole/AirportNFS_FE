import {useState} from 'react';
import axios from "axios";
import "../css/AVFD.css"
import Nav from './Nav';
import {Link,useNavigate} from 'react-router-dom';

const ViewFlight=() => {
	const navigate=useNavigate();
	const [data,setData]=useState([]);
	const getDetails=() => {
		//api call
	}
	const Logout=() => {
		navigate("/home")
	}

	return (
		<>
			<Nav />
			<ul className='nav'>
				<li>
					<Link to="/super-view" >Flight Details</Link>
				</li>
				<li>
					<Link to="/super-flight">Flight Timings</Link>
				</li>
				<li className="logout" onClick={Logout}>
					Logout
				</li>
			</ul>
			<h1>
				View Flight Details
			</h1>

			<label htmlFor='search'>Flight Number</label>
			<input type='text' id='search'></input>

			<div className='data'>
				<table>
					<tr>
						<th>Flight Number</th>
						<th>Source</th>
						<th>Destination</th>
						<th>Departure</th>
						<th>Airline</th>
						<th>Duration</th>
						<th>Halt Station</th>
						<th>Halt Time</th>
					</tr>
					<tr>
						<td>{data.flightNo}</td>
						<td>{"Source"}</td>
						<td>{data.airport}</td>
						<td>{data.Departure}</td>
						<td>{data.terminal}</td>
						<td>{data.duration}</td>
						<td>{"halt station"}</td>
						<td>{"halt timing"}</td>
					</tr>
				</table>
			</div>
		</>
	)

}

export default ViewFlight;