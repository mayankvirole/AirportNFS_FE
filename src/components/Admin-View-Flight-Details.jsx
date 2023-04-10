import {useEffect, useState} from 'react';
import axios from "axios";
import "../css/AVFD.css"
import Nav from './Nav';
import {Link,useNavigate} from 'react-router-dom';
import swal from 'sweetalert'

const ViewFlight=() => {

	const [data,setData]=useState({});
	let fno;

	const navigate=useNavigate();
	const handleChange = (e) => {
		fno = parseInt(e.target.value);
	}
	const onClick = () => {
		axios.post("https://major-be.onrender.com/get-flight-by-number" , { flight_number :fno}).then((res) => {
			console.log(res);
			if(res.status == 200){
			setData(res.data.data);
			swal("data found ! for the flight number " )
			}
			if(res == null)
			swal("data not found", "error");
		})
	}

	const Logout=() => {
		navigate("/home")
	}

	return (
		<>
			<Nav />
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

			<div className='view'>
				<h1>
					View Flight Details
				</h1>
				<label htmlFor='search'>Flight Number</label>
				<input type='text' id='search' name='fno' value={fno} onChange={handleChange}></input>
				<button onClick={onClick}>Search Flight Details</button>
				{(data && data.flight_number && 
				<div className='data'>
					<table>
						<tr>
							<th>Flight Number</th>
							<th>Source</th>
							<th>Destination</th>
							<th>Arrival</th>
							<th>Departure</th>
							<th>Airline</th>
						</tr>
						<tr>
							<td>{data.flight_number}</td>
							<td>{data.source}</td>
							<td>{data.destination}</td>
							<td>{data.arrival}</td>
							<td>{data.departure}</td>
							<td>{data.airlines}</td>
						</tr>
					</table>
				</div>
				)}
			</div>
		</>
	)

}

export default ViewFlight;